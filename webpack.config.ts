import * as fs from 'fs'
import * as path from 'path'
import {ZipArchive, Archiver} from 'archiver'
import webpack from 'webpack'

const EntryFile = 'Generated/index.ts'
const BundleDir = 'Bundle'
const ArchiveFile = 'Deploy/kd-structured.zip'
const TypeFolder = 'Generated/@type'
const AssetFolders: string[] = [
    'ModAsset'
]

async function CopyAssets() {
    await Promise.all(
        AssetFolders.map(
            assetFolder =>
                fs.promises.cp(assetFolder, BundleDir, { recursive: true })
        )
    )
    if (fs.existsSync(TypeFolder)) {
        await fs.promises.cp(TypeFolder, path.join(BundleDir, '@type'), { recursive: true })
    }
}

function SetArchiverEventHandlers(writeStream: fs.WriteStream, archiver: Archiver) {
    writeStream.on('close', function () {
        console.log(archiver.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
    })
    writeStream.on('end', function () {
        console.log('Data has been drained');
    })
    archiver.on('warning', function (err) {
        if (err.code === 'ENOENT') {
            // log warning
        } else {
            // throw error
            throw err;
        }
    })
    archiver.on('error', function (err) {
        throw err;
    })
}

/**
 * execute build
 * @param {BundleOptions} options 
 */
async function BuildArchive() {
    const archiveFilePath = path.resolve(ArchiveFile)
    const stream = fs.createWriteStream(archiveFilePath)

    const zipArchiver = new ZipArchive({
        zlib: {
            level: 9
        }
    })
    SetArchiverEventHandlers(stream, zipArchiver)
    // pipe archive data to the file
    zipArchiver.pipe(stream)
    await zipArchiver
        .directory(BundleDir, false)
        .finalize()
    await new Promise<void>(resolve => stream.on("close", resolve))
}

function PreBuild(): webpack.WebpackPluginInstance {
    return {
        apply: (compiler) => {
            compiler.hooks.beforeCompile.tapPromise('DoneArchiveBuilding', async (_) => {
                const archiveFilePath = path.resolve(ArchiveFile)
                const archiveDir = path.dirname(archiveFilePath)
                if (!fs.existsSync(archiveDir)) {
                    fs.mkdirSync(archiveDir)
                }

                if (fs.existsSync(archiveFilePath)) {
                    fs.unlinkSync(archiveFilePath)
                }

                for (const staleFolder of [TypeFolder, path.join(BundleDir, '@type')]) {
                    if (fs.existsSync(staleFolder)) {
                        fs.rmSync(staleFolder, { recursive: true })
                    }
                }
            })
        }
    }
}

function PostBuild(): webpack.WebpackPluginInstance {
    return {
        apply: (compiler) => {
            compiler.hooks.done.tapPromise('DoneArchiveBuilding', async (stats) => {
                if (!stats.hasErrors()) {
                    await CopyAssets()
                    await BuildArchive()
                }
            })
        }
    }
}

function Config(env: Record<string, unknown>, argv: Record<string, string>): webpack.Configuration {

    return {
        entry: path.resolve(EntryFile),
        output: {
            path: path.join(path.resolve(BundleDir), 'kd-structured'),
            filename: 'bundle.es',
            module: true,
            library: {
                // name: 'kd-structured',
                type: 'module'
            },
            clean: true
        },
        externalsType: 'var',
        externals: {
            "pixi-filters": "PIXI",
            "pixi.js": "PIXI",
            "pixi.js-legacy": "PIXI"
        },
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: {
                        // ts-loader finds Generated/tsconfig.json via its default config discovery from the entry folder.
                        'loader': 'ts-loader',
                    },
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        devtool: (argv['mode'] === 'production') ? false : 'inline-source-map',
        plugins: [
            PreBuild(),
            PostBuild()
        ]
    }
}

export default Config