import * as TSMorph from 'ts-morph'
import { TransformFunctions } from './SourceTransformer.ts'
import * as fs from 'fs'

const KDInterfaceProject = new TSMorph.Project()
fs.mkdirSync('./Generated', { recursive: true })
fs.copyFileSync('./tsconfig-mod.json', './Generated/tsconfig.json')
const GeneratedProject = new TSMorph.Project({
    tsConfigFilePath: './Generated/tsconfig.json'
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

// function TransformTypes() {
//     const out = GeneratedProject.createDirectory('__Generated').createSourceFile(
//         'temp.ts'
//     )
//     const copyNode = (node: TSMorph.Node) =>{
//         out.addStatements(writer => writer.write(node.getFullText()))
//         if(node.isKind(TSMorph.SyntaxKind.InterfaceDeclaration)){
//             node.getStructure()
//         }
//     }
//     KDInterface.getInterfaces().forEach(copyNode)
//     KDInterface.getTypeAliases().forEach(copyNode)
//     KDInterface.getEnums().forEach(copyNode)

//     out.getTypeAliases().forEach(
//         aliases => {
//             if(aliases.getTypeNodeOrThrow().isKind(TSMorph.ts.SyntaxKind.ImportType)){
//                 aliases.findReferencesAsNodes().forEach(
//                     node => node.replaceWithText('object')
//                 )
//                 out.removeStatement(aliases.getChildIndex())
//             }
//         }
//     )

// }

// TransformTypes()

GeneratedProject.saveSync()
console.log()