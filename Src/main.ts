import * as TSMorph from 'ts-morph'
import { TransformFunctionInSourceFile } from './SourceTransformer.js'

const KDInterfaceProject = new TSMorph.Project()
const GeneratedProject = new TSMorph.Project({
    tsConfigFilePath: 'Generated/tsconfig.json'
})


const KDInterface = KDInterfaceProject.addSourceFileAtPath('KinkyDungeon/out/main.d.ts')
const CodeGenFolder = GeneratedProject.createDirectory('Generated').createDirectory('Src')

const transformResult = TransformFunctionInSourceFile(CodeGenFolder)(KDInterface)
const indexFile = CodeGenFolder.createSourceFile('index.ts')
indexFile.addStatements(writer => writer.writeLine(
    `export * from './${transformResult.getBaseName()}'`
))

GeneratedProject.saveSync()
console.log()