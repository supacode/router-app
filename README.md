# `Route Details`

## Setup

- run `npm install` to install dependencies
- run `npm start` to run project locally

## Directory Structure

Modules are usually contained with themselves, the `ModuleName.ts|tsx`, a corresponding `ModuleName.scss` stylesheet,
and `index.ts` for exporting, just to make it easy to export/import module and have a single access point to the module,
optionally, any helper file associated to the module should be in the module.

- Hooks: Reusable project custom Hooks (`./src/hooks`)
- Utils: Reusable helper functions (`./src/utils`)
- Assets: Project icons, SCSS, icons, SVGs, etc. (`./src/assets`)
- UI Elements: Project UI Elements including `<Button>`, `<Input>`,
