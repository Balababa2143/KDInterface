import * as TSMorph from 'ts-morph'
import { TransformFunctions } from './SourceTransformer.js'

const KDInterfaceProject = new TSMorph.Project()
const GeneratedProject = new TSMorph.Project({
    tsConfigFilePath: 'GeneratedProjectAsset/tsconfig.json'
})


const KDInterface = KDInterfaceProject.addSourceFileAtPath('KinkyDungeon/out/main.d.ts')
const CodeGenFolder = GeneratedProject.createDirectory('Generated')

const generatedFiles = TransformFunctions(CodeGenFolder, KDInterface)
const IndexFile = CodeGenFolder.createSourceFile('index.ts')

for (const generatedFile of generatedFiles) {
    const fileName = generatedFile.getBaseNameWithoutExtension()
    if (fileName !== 'index') {
        IndexFile.addExportDeclaration({
            moduleSpecifier: `./${fileName}`
        })
    }
}

GeneratedProject.saveSync()
console.log()