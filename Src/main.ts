import * as TSMorph from 'ts-morph'
import { TransformFunctions } from './SourceTransformer.js'

const KDInterfaceProject = new TSMorph.Project()
const GeneratedProject = new TSMorph.Project({
    tsConfigFilePath: 'Structured/tsconfig.json'
})


const KDInterface = KDInterfaceProject.addSourceFileAtPath('KinkyDungeon/out/main.d.ts')
const CodeGenFolder = GeneratedProject.createDirectory('Structured').createDirectory('src')

const transformResult = TransformFunctions(CodeGenFolder, KDInterface)
const indexFile = CodeGenFolder.createSourceFile('index.ts')
transformResult.forEach(file =>
    indexFile.addStatements(writer => writer.writeLine(
        `export * from './${file.getBaseNameWithoutExtension()}'`
    ))
)

GeneratedProject.saveSync()
console.log()