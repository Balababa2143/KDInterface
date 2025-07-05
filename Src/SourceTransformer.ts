import {
    Directory,
    FunctionDeclaration,
    FunctionDeclarationStructure,
    InterfaceDeclarationStructure,
    OptionalKind,
    ParameterDeclarationStructure,
    PropertyDeclarationStructure,
    PropertySignatureStructure,
    SourceFile,
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

//#region Function
interface TransformedFunction {
    FuncDesc: OptionalKind<FunctionDeclarationStructure>,
    ParamDesc: OptionalKind<InterfaceDeclarationStructure>
}

const TransformFunction =
    (func: FunctionDeclaration) => {
        const funcParams = func.getParameters()
        const funcName = func.getName()
        if (null == funcName) {
            return null
        }

        const GeneratePackedFunction = () => {
            const newIntarface: OptionalKind<InterfaceDeclarationStructure> = {
                name: `I${funcName}Parameters`,
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
                name: funcName,
                isAsync: func.isAsync(),
                isExported: true,
                parameters: [
                    argPack
                ],
                statements: writer => {
                    // const argList =
                    //     funcParams
                    //         .map(param => `${argPack.name}.${param.getName()}`)
                    //         .join(', ')
                    // writer.writeLine(`return /* @__PURE__ */globalThis.${func.getName()}(${argList})`)
                    writer
                        .write('return /* @__PURE__ */globalThis.').write(funcName).writeLine('(')
                        .indent(() => {
                            for (let i = 0; i < funcParams.length; i++) {
                                const param = funcParams[i]
                                writer
                                    .write(argPack.name).write('.').write(param.getName())
                                    .conditionalWrite(i < funcParams.length - 1, ',')
                                    .newLine()
                            }
                        })
                        .writeLine(')')
                }
            }
            return [newFunc, newIntarface] as const
        }

        let parameterPack: OptionalKind<InterfaceDeclarationStructure> | null = null
        if (funcParams.length > 1) {
            const [packedFunc, paramPack] = GeneratePackedFunction()
            parameterPack = paramPack
            return <TransformedFunction>{
                FuncDesc: packedFunc,
                ParamDesc: parameterPack
            }
        }
        else {
            return null
        }
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

export function TransformFunctions(outputDir: Directory, sourceFile: SourceFile) {
    const resultFileList = <SourceFile[]>[]
    for (const originalFunc of sourceFile.getFunctions()) {
        const result = TransformFunction(originalFunc)
        if (result != null) {
            // console.log(`Creating ${result.FuncDesc.name ?? 'null'}`)
            const resultFile = outputDir.createSourceFile(result.FuncDesc.name! + '.ts')
            resultFile.addInterface(result.ParamDesc)
            resultFile.addFunction(result.FuncDesc)
            resultFileList.push(resultFile)
        }
    }
    return resultFileList
}