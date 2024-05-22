import { Seq } from 'immutable'
import {
    CodeBlockWriter,
    Directory,
    FunctionDeclaration,
    FunctionDeclarationStructure,
    InterfaceDeclarationStructure,
    OptionalKind,
    ParameterDeclarationStructure,
    SourceFile,
    StructureKind,
    VariableDeclaration,
    VariableDeclarationKind,
    VariableStatementStructure,
} from 'ts-morph'

export interface Identifier {
    OldName: string,
    NewName: string
}

export interface InterfaceDesc extends Identifier {
    __Type: 'Interface',
    Desc: OptionalKind<InterfaceDeclarationStructure>
}

export interface FunctionDesc extends Identifier {
    __Type: 'Function',
    Desc: OptionalKind<FunctionDeclarationStructure>
}

export interface VariableDesc extends Identifier {
    __Type: 'Variable'
}

export type DeclarationDesc =
    | InterfaceDesc
    | FunctionDesc
    | VariableDesc

const NameSpaceRegex = {
    LongKD: /^KinkyDungeon(\w+)/,
    ShortKD: /^KD(\w+)/,
    PostKD: /^(\w+)KD$/,
    KinkyDungeon: /^(KinkyDungeon)/
}

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

function TransformFunction(func: FunctionDeclaration) {
    const funcParams = func.getParameters()
    const oldFuncName = func.getName()
    ThrowIfNull(oldFuncName, 'Function has no name')
    const newFuncName =
        TryExtractNameWithoutNamespace(oldFuncName) ?? oldFuncName

    //#region Sub functions
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
        const interfaceDesc: InterfaceDesc = {
            __Type: 'Interface',
            Desc: newIntarface,
            OldName: newIntarface.name,
            NewName: newIntarface.name
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
                writer.writeLine(`return ${func.getName()}(${argList})`)
            }
        }
        const funcDesc: FunctionDesc = {
            __Type: 'Function',
            Desc: newFunc,
            NewName: newFunc.name!,
            OldName: oldFuncName
        }

        return [funcDesc, interfaceDesc] as DeclarationDesc[]
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
                    `return ${oldFuncName}(...${argPack.name})`
                )
            }
        }
        const funcDesc: FunctionDesc = {
            __Type: 'Function',
            Desc: newFunc,
            NewName: newFunc.name!,
            OldName: oldFuncName
        }
        return funcDesc
    }
    //#endregion
    const newDecls: DeclarationDesc[] = []
    if (funcParams.length > 2) {
        newDecls.push(...GeneratePackedFunction())
    }
    if (newFuncName !== oldFuncName) {
        newDecls.push(GenerateForwardFunction())
    }
    return newDecls
}

Object.defineProperty(
    {},
    "Foo",
    {
        get() {

        },
    }
)

const VariableCollectionName = 'Variables'

function TransformVariable(desc: VariableDesc) {
    return (writer: CodeBlockWriter) => {
        writer
            .writeLine('Object.defineProperty(')
            .indent(() => {
                writer.writeLine(`${VariableCollectionName},`)
                writer.writeLine(`${desc.NewName},`)
                writer.block(() => {
                    writer.write('get() ').block(() => {
                        writer.writeLine(`return ${desc.OldName}`)
                    })
                })
            })
            .writeLine(')')
    }
}

export function TransformSourceFile(outputDir: Directory) {
    const Transform = (sourceFile: SourceFile) => {
        const newDeclarations =
            Seq(sourceFile.getFunctions())
                .filter(f => f.getName())
                .flatMap(TransformFunction)
                .concat(
                    Seq(sourceFile.getVariableDeclarations())
                    .map(decl => {
                        const OldName = decl.getName()
                        const NewName =
                            TryExtractNameWithoutNamespace(OldName) ?? OldName
                        return <VariableDesc>{
                            __Type: 'Variable',
                            OldName,
                            NewName
                        }
                    } )
                )
                .groupBy(desc => desc.NewName)
                .map(descSeq =>
                    descSeq
                        .groupBy(desc => desc.OldName)
                        .map(dup => dup.first())
                        .filter(NotNullOrUndefined)
                        .valueSeq()
                )
                .map(descSeq => {
                    if (descSeq.count() > 1) {
                        return descSeq.map(desc => {
                            let newName: string
                            if (desc.OldName.match(NameSpaceRegex.ShortKD)) {
                                newName = 'S' + desc.NewName
                            }
                            else if (desc.OldName.match(NameSpaceRegex.PostKD)) {
                                newName = 'P' + desc.NewName
                            }
                            else if (desc.OldName.match(NameSpaceRegex.LongKD)){
                                return desc
                            }
                            else {
                                newName = '_' + desc.NewName
                            }
                            const ret = {
                                ...desc
                            }
                            ret.NewName = newName
                            switch (ret.__Type) {
                                case 'Function':
                                case 'Interface':
                                    ret.Desc.name = newName
                                    break
                                case 'Variable':
                                    break
                                default:
                                    Throw('Unknow declaration type')
                            }
                            return ret
                        })
                    }
                    else {
                        return descSeq
                    }
                })
                .valueSeq()
                .flatMap(x => x)
        const newSourceFile = outputDir.createSourceFile(`${sourceFile.getBaseNameWithoutExtension()}.ts`)
        const variableCollectionClass = newSourceFile.addClass({
            name: VariableCollectionName,
            isExported: true
        })
        newDeclarations
            .forEach(desc => {
                switch (desc.__Type) {
                    case 'Function':
                        newSourceFile.addFunction(desc.Desc)
                        break
                    case 'Interface':
                        newSourceFile.addInterface(desc.Desc)
                        break
                    case 'Variable':
                        variableCollectionClass.addGetAccessor({
                            name: desc.NewName,
                            isStatic: true,
                            statements: [
                                `return ${desc.OldName}`
                            ]
                        })
                        break
                    default:
                        throw new Error('Unknown declaration type')
                }
            })
        return newSourceFile
    }
    return Transform
}