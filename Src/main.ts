import * as TSMorph from 'ts-morph'

const KDInterfaceProject = new TSMorph.Project({
    tsConfigFilePath: 'Submodule/KDInterface/tsconfig.json'
})

const KDInterface = KDInterfaceProject.getDirectoryOrThrow('Submodule/KDInterface')

const GeneratedProject = new TSMorph.Project({
    tsConfigFilePath: 'Generated/tsconfig.json'
})

const CodeGenFolder = GeneratedProject.createDirectory('Generated/Src')

const KinkyDungeonNameSpaceRegex = [
    /KD(\w+)/,
    /KinkyDungeon(\w+)/,
    /(\w+)KD/,
    /(\w+)KinkyDungeon/,
    /(KinkyDungeon)/
]

const GameSourceFolder = KDInterface.getDirectoryOrThrow('Game')
const CodeGenGameSourceFolder = CodeGenFolder.createDirectory('Game')

function ThrowIfNull<T>(obj: T | undefined | null, message: string = 'NullReferenceError', options?: ErrorOptions): asserts obj is T{
    if(null == obj){
        throw new Error(message, {
            cause:{
                ...(options?.cause ?? {}),
                ErrorType: 'NullReferenceError'
            }
        })
    }
}

function TryExtractNameWithoutNamespace(identifier: string) {
    const regexResult =
        KinkyDungeonNameSpaceRegex
            .map(regex => identifier.match(regex))
            .find(result => result)
    return regexResult?.at(1)
}

function CreateAlias(sourceFile: TSMorph.SourceFile, oldName: string, newName: string){
    return sourceFile.addVariableStatement({
        declarationKind: TSMorph.VariableDeclarationKind.Const,
        declarations: [
            {
                name: newName,
                initializer: writer => writer.write(oldName),
            }
        ],
        isExported: true,
    })
}

function TransformFunction(source: TSMorph.SourceFile) {
    return function (func: TSMorph.FunctionDeclaration) {
        const funcParams = func.getParameters()
        const oldFuncName = func.getName()
        ThrowIfNull(oldFuncName, 'Function has no name')
        const newFuncName = 
            TryExtractNameWithoutNamespace(oldFuncName) ?? oldFuncName
        //#region Sub functions
        const GeneratePackedFunction = () => {
            const newIntarface = source.addInterface({
                name: `I${newFuncName}Parameters`,
                isExported: true
            })
            for (const arg of funcParams) {
                newIntarface.addProperty({
                    name: arg.getName(),
                    type: arg.getType().getText(),
                    hasQuestionToken: arg.isOptional()
                })
            }
            const newFunc = source.addFunction({
                name: `Packed${newFuncName}`,
                isAsync: func.isAsync(),
                isExported: true
            })
            const argsPack = newFunc.insertParameter(0, {
                name: 'args',
                type: newIntarface.getName()
            })
            newFunc.setBodyText(writer => {
                const argList =
                    funcParams
                        .map(param => `${argsPack.getName()}.${param.getName()}`)
                        .join(', ')
                writer.writeLine(`${func.getName()}(${argList})`)
            })
            return newFunc
        }
        //#endregion
        if (funcParams.length > 4) {
            return GeneratePackedFunction()
        }
        else {
            return CreateAlias(source, oldFuncName, newFuncName)
        }
    }
}

function TransformVariable(sourceFile: TSMorph.SourceFile){
    return function(variable: TSMorph.VariableDeclaration){
        const oldName = variable.getName()
        const newName = TryExtractNameWithoutNamespace(oldName) ?? oldName
        if(oldName !== newName){
            return CreateAlias(sourceFile, oldName, newName)
        }
        else{
            return variable
        }
    }
}

function TransformSourceFile(outputDir: TSMorph.Directory){
    return function(sourceFile: TSMorph.SourceFile) {
        const fileNameWithoutNamespace =
            TryExtractNameWithoutNamespace(sourceFile.getBaseName())
        let newSourceFile: TSMorph.SourceFile
        if (fileNameWithoutNamespace) {
            newSourceFile = outputDir.createSourceFile(`${fileNameWithoutNamespace}.ts`)
        }
        else {
            console.log(`Unable to extract name from ${sourceFile.getBaseName()}`)
            newSourceFile = outputDir.createSourceFile(sourceFile.getBaseName())
        }
        sourceFile
        .getFunctions()
        .filter(f => f.getName())
        .forEach(TransformFunction(newSourceFile))
        sourceFile
        .getVariableDeclarations()
        .forEach(TransformVariable(newSourceFile))
        return newSourceFile
    }
}

const generatedSources = 
    GameSourceFolder
    .getSourceFiles()
    .filter(file => KinkyDungeonNameSpaceRegex.some(regex => file.getBaseName().match(regex)))
    .map(TransformSourceFile(CodeGenGameSourceFolder))
const moduleExportFile =
    CodeGenGameSourceFolder.createSourceFile(`index.ts`)
generatedSources
.forEach(sourceFile =>{
    moduleExportFile.addExportDeclaration({
        moduleSpecifier: `./${sourceFile.getBaseNameWithoutExtension()}`,
        namespaceExport: sourceFile.getBaseNameWithoutExtension()
    })
})
GeneratedProject.saveSync()
console.log()