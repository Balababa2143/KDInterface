import * as TSMorph from 'ts-morph'
import { TransformFunctions } from './SourceTransformer.js'

const KDInterfaceProject = new TSMorph.Project()
const GeneratedProject = new TSMorph.Project({
    tsConfigFilePath: 'Structured/tsconfig.json'
})


const KDInterface = KDInterfaceProject.addSourceFileAtPath('KinkyDungeon/out/main.d.ts')
const CodeGenFolder = GeneratedProject.createDirectory('Structured').createDirectory('src')

TransformFunctions(CodeGenFolder, KDInterface)

GeneratedProject.saveSync()
console.log()