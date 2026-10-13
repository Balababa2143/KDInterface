# KinkyDungeonInterfaceWrapper
Code gen project creating convenience wrapper for kinky dungeon

## Requirements

- Node.js >= 24 (the generator and webpack configs run on Node's native TypeScript support — no ts-node)
- Game declarations present: build the game project first (e.g. `npm run buildTypes` in the `KinkyDungeon` folder) so that `KinkyDungeon/out/main.d.ts` exists

## Build Steps

1. Run the type build script (`npm run buildTypes`) in the KinkyDungeon folder.
2. Run the main build script (`npm run rebuild`) in the root folder of this project.

`npm run generate` (alias of `npm run rebuild`) cleans previous output, then performs all code generation and bundling:
1. `node Src/main.ts` — generates the wrapper sources into `Generated/` and emits `Generated/@type/kd-structured/*.d.ts`
2. `webpack` — bundles `Generated/index.ts` into `Bundle/kd-structured/bundle.es` and copies the types to `Bundle/@type`

The finished mod archive is written to `Deploy/kd-structured.zip` (`ModAsset` + `bundle.es` + `@type`).

`npm run generate-prod` builds the bundle without inline source maps. Both scripts regenerate from scratch, since the generator skips files that already exist.