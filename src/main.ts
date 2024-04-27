import * as TSMorph from 'ts-morph'

const KDInterface = new TSMorph.Project()
KDInterface.addSourceFileAtPath('lib/KinkyDungeonInterface.d.ts')

const Project = new TSMorph.Project({
    compilerOptions:{
        target: TSMorph.ScriptTarget.ESNext,
        module: TSMorph.ModuleKind.ESNext,
        moduleResolution: TSMorph.ModuleResolutionKind.NodeNext,
        esModuleInterop: true,
        allowSyntheticDefaultImports: true,
        isolatedModules: true,
        strict: true,
        alwaysStrict: true,
        strictBindCallApply: true,
        outDir: "build",
        declarationDir: "include",
        composite: true,
        lib: [
          "DOM",
          "DOM.Iterable",
          "ES2022"
        ]
    },
})

Project.createDirectory('generated/src')
const source = Project.createSourceFile('generated/src/KDWrapper.ts')

for(const sourceFile of KDInterface.getSourceFiles()){
    for(const func of sourceFile.getFunctions()){
        const funcParams = func.getParameters()
        if(funcParams.length > 4){
            const newIntarface = source.addInterface({
                name: `I${func.getName()}Parameters`
            })
            for(const arg of funcParams){
                newIntarface.addProperty({
                    name: arg.getName(),
                    type: arg.getType().getText(),
                    hasQuestionToken: arg.isOptional()
                })
            }
            const newFunc = source.addFunction({
                name: `Packed${func.getName()}`,
                isAsync: func.isAsync(),
                isExported: true
            })
            const argsPack = newFunc.insertParameter(0, {
                name: 'args',
                type: newIntarface.getName()
            })
            newFunc.setBodyText(writer =>{
                const argList = 
                    funcParams
                    .map(param =>`${argsPack.getName()}.${param.getName()}`)
                    .join(', ')
                writer.writeLine(`${func.getName()}(${argList})`)
            })
        }
        else{
            source.addVariableStatement({
                declarationKind: TSMorph.VariableDeclarationKind.Const,
                declarations:[
                    {
                        name: func.getName()!,
                        initializer: writer => writer.write(func.getName()!),
                    }
                ],
                isExported: true,
            })
        }
    }
}
Project.saveSync()
console.log()