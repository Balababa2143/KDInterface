import * as TSMorph from 'ts-morph'
import { TransformSourceFile } from './SourceTransformer.js'

const KDInterfaceProject = new TSMorph.Project()
const GeneratedProject = new TSMorph.Project({
    tsConfigFilePath: 'Generated/tsconfig.json'
})

const KinkyDungeonNameSpaceRegex = [
    /^KinkyDungeon(\w+)/,
    /^KD(\w+)/,
    /^(KinkyDungeon)/
]

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


const KDInterface = KDInterfaceProject.addSourceFileAtPath('KinkyDungeon/out/main.d.ts')
const CodeGenFolder = GeneratedProject.createDirectory('Generated')

const file = TransformSourceFile(CodeGenFolder)(KDInterface)
file?.move('KDInterface.ts')

GeneratedProject.saveSync()
console.log()