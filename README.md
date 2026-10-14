# KinkyDungeonInterfaceWrapper
Code gen project creating convenience wrapper for kinky dungeon

## Requirements

- Node.js >= 24 (the generator and webpack configs run on Node's native TypeScript support — no ts-node)
- Game declarations present: build the game project first (e.g. `npm run buildTypes` in the `KinkyDungeon` folder) so that `KinkyDungeon/out/main.d.ts` exists

## Build Steps

1. Run the type build script (`npm run buildTypes`) in the KinkyDungeon folder.
2. Run the main build script (`npm run rebuild`) in the root folder of this project.

`npm run generate` (alias of `npm run rebuild`) cleans previous output, then performs all code generation and bundling:
1. `node Src/main.ts` — generates the wrapper sources into `Generated/`
2. `webpack` — bundles `Generated/index.ts` into `Bundle/kd-structured/bundle.es`, copies `ModAsset` into `Bundle/`, and emits `Generated/@type/kd-structured/*.d.ts` through `Generated/tsconfig.json`

## Outputs

Every build writes two archives, kept apart on purpose so that the mod package stays small:

- `Deploy/kd-structured.zip` — the mod itself: `ModAsset` (including `mod.json` and `inject.js`) plus `kd-structured/bundle.es`. Scripts and assets only; the declarations no longer ride along.
- `Deploy/kd-structured-types.zip` — the types package: `@type/kd-structured/*.d.ts` plus `PackageAsset` (`package.json` and `tsconfig.json`) at the archive root. The same tree is staged unzipped in `Deploy/types/` for local consumption.

Mods that import `kd-structured` for typing need the types archive, not the mod archive: unpack `Deploy/kd-structured-types.zip` into `node_modules/kd-structured`, or point the consumer's `typeRoots` at the unpacked `@type` folder. Keep the `version` in `PackageAsset/package.json` in step with `modbuild` in `ModAsset/mod.json`.

`npm run generate-prod` builds the bundle without inline source maps. Both scripts regenerate from scratch, since the generator skips files that already exist.

## Using kd-structured from another mod

`inject.js` publishes `kd-structured/bundle.es` through an import map while the game
loads mods, so consumers reach this mod with a plain `import('kd-structured')`
rather than through a global. The bundle is never executed by the game itself: the
game registers non-script files as assets, and the inject script fetches that asset,
re-wraps it as `text/javascript` and maps the specifier at it.

Mods load in descending `priority` (this one is `20`) and the game awaits each file,
so a mod declaring a lower priority finds the map already installed. If you cannot
arrange that, retry the import: until the map exists the specifier does not resolve,
and `import()` rejects with a `TypeError`.

```js
// A mod file is eval'd as a classic script, and the game awaits what the eval
// returns before starting the next mod. Two consequences: never reject, and never
// wait forever, or loading stalls with nothing in the log to explain it.
;(async () => {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

    const importKDStructured = async (timeoutMs = 30_000) => {
        const deadline = Date.now() + timeoutMs
        for (;;) {
            try {
                return await import('kd-structured')
            } catch (error) {
                // An unresolved specifier is a TypeError and is worth retrying;
                // anything else is a real module error and is not.
                if (!(error instanceof TypeError)) throw error
                if (Date.now() > deadline) {
                    console.error('kd-structured did not load in time; skipping')
                    return undefined
                }
                await sleep(50)
            }
        }
    }

    const KD = await importKDStructured()
    if (!KD) return

    // …use KD's wrappers…
})().catch(error => console.error('my mod failed:', error))
```

Boids, the sibling project that consumes this one, waits the same way internally,
which is what lets the two mods be installed and loaded in either order.