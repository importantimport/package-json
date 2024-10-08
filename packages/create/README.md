# @package-json/create

<!-- automd:badges color="green" license packagephobia -->

[![npm version](https://img.shields.io/npm/v/@package-json/create?color=green)](https://npmjs.com/package/@package-json/create)
[![npm downloads](https://img.shields.io/npm/dm/@package-json/create?color=green)](https://npmjs.com/package/@package-json/create)
[![license](https://img.shields.io/github/license/importantimport/package-json?color=green)](https://github.com/importantimport/package-json/blob/main/LICENSE)

<!-- /automd -->

Zero-config `package.json` creator.

## Usage

###### cli

```sh
# npm
npx create @package-json

# pnpm
pnpm create @package-json

# bun
bun create @package-json
```

###### programmatic

<!-- automd:file src="./test/fixture/example.ts" code -->

```ts [example.ts]
import { create } from '@package-json/create'

const json = create()

export default json

```

<!-- /automd -->

###### config

<!-- automd:file src="./test/fixture/pkgc.config.ts" code -->

```ts [pkgc.config.ts]
// pkgc.config.ts / package-json-create.config.ts
import { defineConfig } from '@package-json/create'

export default defineConfig({
  name: '@package-json/foo', // scope: @package-json
  scripts: {
    'build': 'pkgroll',
    'build:watch': 'pkgroll --watch',
    'test': 'vitest run',
    'test:watch': 'vitest watch',
  },
  type: 'module',
})

```

<!-- /automd -->

## License

[MIT](../../LICENSE.md)
