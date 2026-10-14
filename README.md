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