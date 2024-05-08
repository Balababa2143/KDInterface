import * as TSMorph from 'ts-morph'

const KDInterfaceProject = new TSMorph.Project()
const GeneratedProject = new TSMorph.Project({
    tsConfigFilePath: 'Generated/tsconfig.json'
})

const KinkyDungeonNameSpaceRegex = [
    /^KinkyDungeon(\w+)/,
    /^(KD\w+)/,
    /^(KinkyDungeon)/
]
// const KDNamespaceRegex = [
//     /KD(\w+)/,
//     /(\w+)KD/,
// ]

function ThrowIfNull<T>(obj: T | undefined | null, message: string = 'NullReferenceError'): asserts obj is T {
    if (null == obj) {
        throw new Error(message)
    }
}

function TryExtractNameWithoutNamespace(identifier: string) {
    const matchRegexList = (regexList: RegExp[]) =>
        regexList
            .map(regex => identifier.match(regex))
            .find(result => result)
    let matchResult
    if (matchResult = matchRegexList(KinkyDungeonNameSpaceRegex)) {
        return matchResult[1]
    }
    // else if (matchResult = matchRegexList(KDNamespaceRegex)) {
    //     return `_${matchResult[1]}`
    // }
    else {
        return null
    }
}

function CreateAliasIfDifferent(sourceFile: TSMorph.SourceFile, oldName: string, newName: string) {
    if (oldName === newName) {
        return null
    }
    if(sourceFile.getVariableDeclaration(newName)){
        throw new Error('Variable already exists')
    }
    else {
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
                const prop = {
                    name: arg.getName(),
                    type: arg.getType().getText(),
                    hasQuestionToken: arg.isOptional()
                }
                newIntarface.addProperty(prop)
            }
            const newFunc = source.addFunction({
                name: `${newFuncName}_`,
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
                writer.writeLine(`return ${func.getName()}(${argList})`)
            })
            return newFunc
        }
        //#endregion
        const result = []
        if (funcParams.length > 4) {
            result.push(GeneratePackedFunction())
        }
        if(!source.getVariableDeclaration(newFuncName)){
            result.push(CreateAliasIfDifferent(source, oldFuncName, newFuncName))
        }
        return result
    }
}

function TransformVariable(sourceFile: TSMorph.SourceFile) {
    return function (variable: TSMorph.VariableDeclaration) {
        const oldName = variable.getName()
        const newName = TryExtractNameWithoutNamespace(oldName) ?? oldName
        if(!sourceFile.getVariableDeclaration(newName)){
            return CreateAliasIfDifferent(sourceFile, oldName, newName)
        }
    }
}

function TransformSourceFile(outputDir: TSMorph.Directory) {
    return function (sourceFile: TSMorph.SourceFile) {
        const newSourceFile = outputDir.createSourceFile(`${sourceFile.getBaseNameWithoutExtension()}.ts`)
        sourceFile
            .getFunctions()
            .filter(f => f.getName())
            .forEach(TransformFunction(newSourceFile))
        sourceFile
            .getVariableDeclarations()
            .forEach(TransformVariable(newSourceFile))
        // newSourceFile.addExportDeclaration({})
        if (newSourceFile.getChildCount() > 0) {
            return newSourceFile
        }
        else {
            newSourceFile.delete()
            return null
        }
    }
}

function TransformDirectory(outFolder: TSMorph.Directory) {
    return function (folder: TSMorph.Directory) {
        folder
            .getSourceFiles()
            .filter(file => file.getBaseName().match('KDInterface'))
            .map(TransformSourceFile(outFolder))
        return outFolder
    }
}

function GenerateExportIndex(folder: TSMorph.Directory) {
    const moduleExportFile =
        folder.createSourceFile(`index.ts`)
    folder
        .getSourceFiles()
        .filter(file => !file.getBaseName().match('index'))
        .forEach(sourceFile => {
            moduleExportFile.addExportDeclaration({
                moduleSpecifier: `./${sourceFile.getBaseNameWithoutExtension()}`,
                namespaceExport: sourceFile.getBaseNameWithoutExtension()
            })
        })
    folder
        .getDirectories()
        .filter(folder => folder.getSourceFile('index.ts'))
        .forEach(folder => {
            moduleExportFile.addExportDeclaration({
                moduleSpecifier: `./${folder.getBaseName()}`,
                namespaceExport: folder.getBaseName()
            })
        })
}

const KDInterface = KDInterfaceProject.addSourceFileAtPath('Submodule/KDInterface/out/KDInterface.d.ts')
const CodeGenFolder = GeneratedProject.createDirectory('Generated/Src')

TransformSourceFile(CodeGenFolder)(KDInterface)
GenerateExportIndex(CodeGenFolder)

GeneratedProject.saveSync()
console.log()