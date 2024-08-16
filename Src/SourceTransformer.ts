import Immutable, { Collection, Record, RecordOf, Seq } from 'immutable'
import {
    CodeBlockWriter,
    Directory,
    FunctionDeclaration,
    FunctionDeclarationStructure,
    InterfaceDeclarationStructure,
    NameableNode,
    NameableNodeSpecific,
    OptionalKind,
    ParameterDeclarationStructure,
    SourceFile,
    StructureKind,
    VariableDeclaration,
    VariableDeclarationKind,
    VariableStatementStructure,
} from 'ts-morph'

function Throw(message = ''): never {
    throw new Error(message)
}

function ThrowIfNull<T>(obj: T | undefined | null, message: string = 'NullReferenceError'): asserts obj is T {
    if (null == obj) {
        Throw(message)
    }
}

function NotNullOrUndefined<TValue>(value: TValue | null | undefined): value is TValue {
    return value != null
}

function NotNullOrEmpty(value: string | null | undefined): value is string {
    return NotNullOrUndefined(value) && value !== ""
}

//#region renaming
const NameSpaceRegex = {
    LongKD: /^KinkyDungeon(\w+)/,
    ShortKD: /^KD(\w+)/,
    PostKD: /^(\w+)KD$/,
    KinkyDungeon: /^(KinkyDungeon)/
}

function TryExtractNameWithoutNamespace(identifier: string) {
    const matchRegexList = (regexList: RegExp[]) =>
        regexList
            .map(regex => identifier.match(regex))
            .find(result => result)
    let matchResult
    if (matchResult = matchRegexList(Object.values(NameSpaceRegex))) {
        return matchResult[1]
    }
    // else if (matchResult = matchRegexList(KDNamespaceRegex)) {
    //     return `_${matchResult[1]}`
    // }
    else {
        return null
    }
}

interface OldNewNamePair {
    OldName: string,
    NewName: string
}

const OldNewNamePair = Record({
    OldName: "",
    NewName: ""
} as OldNewNamePair)

const BuildNameMap = (names: Iterable<string>) => {
    const oldNewNamePairList =
        Seq(names)
            .map(oldName => [
                oldName,
                TryExtractNameWithoutNamespace(oldName) ?? oldName
            ] as [string, string])
    const groupedNames =
        oldNewNamePairList
            .groupBy(([_, newName]) => newName)
            .valueSeq()
    const uniqueOldNewNamePairList =
        groupedNames
            .flatMap(seq => seq.count() > 1 ? seq.map(ResolveNameConflict) : seq)
    return Collection.Keyed(uniqueOldNewNamePairList).toMap()
}

const ResolveNameConflict = ([oldName, conflictedName]: [string, string]) => {
    const conflictResolvedName = (() => {
        if (oldName.match(NameSpaceRegex.ShortKD)) {
            return 'S' + conflictedName
        }
        else if (oldName.match(NameSpaceRegex.PostKD)) {
            return 'P' + conflictedName
        }
        else if (oldName.match(NameSpaceRegex.LongKD)) {
            return '__' + conflictedName
        }
        else {
            return oldName
        }
    })()
    return [oldName, conflictResolvedName] as [string, string]
}
//#endregion

//#region TransformFunction
interface TransformedFunction {
    OldName: string,
    NewName: string,
    FuncDescs: OptionalKind<FunctionDeclarationStructure>[],
    ParamDescs: OptionalKind<InterfaceDeclarationStructure> | null
}

const TransformedFunction = Record({
    OldName: "",
    NewName: "",
    FuncDescs: [],
    ParamDescs: null
} as TransformedFunction)

const TransformFunction = (OldNewNameMap: Immutable.Map<string, string>) =>
    (func: FunctionDeclaration) => {
        const funcParams = func.getParameters()
        const oldFuncName = func.getName()
        ThrowIfNull(oldFuncName, 'Function has no name')
        const newFuncName = OldNewNameMap.get(oldFuncName)

        const GeneratePackedFunction = () => {
            const newIntarface: OptionalKind<InterfaceDeclarationStructure> = {
                name: `I${newFuncName}Parameters`,
                isExported: true
            }
            newIntarface.properties = []
            for (const arg of funcParams) {
                newIntarface.properties.push({
                    name: arg.getName(),
                    type: arg.getType().getText(),
                    hasQuestionToken: arg.isOptional()
                })
            }
            const argPack: OptionalKind<ParameterDeclarationStructure> = {
                name: 'args',
                type: newIntarface.name
            }
            const newFunc: OptionalKind<FunctionDeclarationStructure> = {
                name: `${newFuncName}_`,
                isAsync: func.isAsync(),
                isExported: true,
                parameters: [
                    argPack
                ],
                statements: writer => {
                    const argList =
                        funcParams
                            .map(param => `${argPack.name}.${param.getName()}`)
                            .join(', ')
                    writer.writeLine(`return /* @__PURE__ */globalThis.${func.getName()}(${argList})`)
                }
            }
            return [newFunc, newIntarface] as const
        }

        const GenerateForwardFunction = () => {
            const argPack: OptionalKind<ParameterDeclarationStructure> = {
                name: 'args',
                type: `Parameters<typeof ${oldFuncName}>`,
                isRestParameter: true
            }

            const newFunc: OptionalKind<FunctionDeclarationStructure> = {
                name: newFuncName,
                isAsync: func.isAsync(),
                isExported: true,
                parameters: [
                    argPack
                ],
                returnType: `ReturnType<typeof ${oldFuncName}>`,
                statements: writer => {
                    writer.writeLine(
                        `return /* @__PURE__ */globalThis.${oldFuncName}(...${argPack.name})`
                    )
                }
            }
            return newFunc
        }

        const funcDescs = [] as OptionalKind<FunctionDeclarationStructure>[]
        let parameterPack: OptionalKind<InterfaceDeclarationStructure> | null = null
        if (funcParams.length > 2) {
            const [packedFunc, paramPack] = GeneratePackedFunction()
            funcDescs.push(packedFunc)
            parameterPack = paramPack
        }
        if (newFuncName !== oldFuncName) {
            funcDescs.push(GenerateForwardFunction())
        }
        return TransformedFunction({
            OldName: oldFuncName,
            NewName: newFuncName,
            FuncDescs: funcDescs,
            ParamDescs: parameterPack
        })
    }

const GetAllNames = (nodes: Iterable<{ getName(): string | undefined }>) =>
    Seq(nodes)
        .map(n => n.getName())
        .filter(NotNullOrEmpty)

//#endregion

//#region Variable
const TransformVariable = (OldNewNameMap: Immutable.Map<string, string>) => (decl: VariableDeclaration) => {
    const oldName = decl.getName()
    const newName = OldNewNameMap.get(oldName)
    return {
        declarations: [
            {
                name: newName,
                initializer: `${oldName}`
            }
        ],
        isExported: true,
        declarationKind: VariableDeclarationKind.Const
    } as OptionalKind<VariableStatementStructure>
}
//#endregion

function GenerateIndexFile(dir: Directory) {
    const indexFile = dir.createSourceFile('index.ts')
    dir
        .getSourceFiles()
        .forEach(file => {
            const fileName = file.getBaseNameWithoutExtension();
            if (fileName !== 'index') {
                indexFile.addExportDeclaration({
                    moduleSpecifier: `./${fileName}`
                })
            }
        })
    return indexFile
}

const GetOrCreateSourceFile = (dir: Directory, file: string) =>
    dir.getSourceFile(file) ?? dir.createSourceFile(file)

export function TransformFunctionInSourceFile(outputDir: Directory) {
    const Transform = (sourceFile: SourceFile) => {
        const resultFolder = outputDir.createDirectory(sourceFile.getBaseNameWithoutExtension())
        const oldNewNameMap =
            BuildNameMap(
                GetAllNames(sourceFile.getFunctions())
                    .concat(GetAllNames(sourceFile.getVariableDeclarations()))
            )
        const functionTransformer = TransformFunction(oldNewNameMap)
        const functionTransResult =
            Seq(sourceFile.getFunctions())
                .filter(f => f.getName() != null)
                .groupBy(f => f.getName())
                .valueSeq()
                .map(seq => seq.first() as FunctionDeclaration)
                .map(functionTransformer)
                .toList()

        const emitTransResult = <TransResult>(resultList: Iterable<TransResult>, emit: (result: TransResult) => SourceFile) => {
            for (const result of resultList) {
                try {
                    emit(result)
                }
                catch (e) {
                    console.error(JSON.stringify((result as any).toJS()))
                    throw e
                }
            }
        }

        emitTransResult(functionTransResult, result => {
            const sourceFileName = `${result.NewName}.ts`
            const packedFuncSourceFile = GetOrCreateSourceFile(resultFolder, sourceFileName)
            packedFuncSourceFile.addFunctions(result.FuncDescs)
            if (result.ParamDescs != null) {
                packedFuncSourceFile.addInterface(result.ParamDescs)
            }
            return packedFuncSourceFile
        })
        const indexFile = GenerateIndexFile(resultFolder)

        const variableTransResult =
            Seq(sourceFile.getVariableDeclarations())
                .map(TransformVariable(oldNewNameMap))
        const variableFolder = resultFolder.createDirectory('Var')
        emitTransResult(variableTransResult, result =>{
            const sourceFileName = `${result.declarations[0].name}.ts`
            const sourceFile = GetOrCreateSourceFile(variableFolder, sourceFileName)
            sourceFile.addVariableStatement(result)
            return sourceFile
        })
        GenerateIndexFile(variableFolder)

        indexFile.addExportDeclaration({
            moduleSpecifier: './Var',
            namespaceExport: 'Var'
        })
        return resultFolder
    }
    return Transform
}