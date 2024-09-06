# @package-json/create

<!-- automd:badges color="green" license packagephobia -->

[![npm version](https://img.shields.io/npm/v/@package-json/create?color=green)](https://npmjs.com/package/@package-json/create)
[![npm downloads](https://img.shields.io/npm/dm/@package-json/create?color=green)](https://npmjs.com/package/@package-json/create)

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

## License

[MIT](../../LICENSE.md)
