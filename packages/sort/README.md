# @package-json/sort

<!-- automd:badges color="green" license packagephobia -->

[![npm version](https://img.shields.io/npm/v/@package-json/sort?color=green)](https://npmjs.com/package/@package-json/sort)
[![npm downloads](https://img.shields.io/npm/dm/@package-json/sort?color=green)](https://npmjs.com/package/@package-json/sort)

<!-- /automd -->

Opinionated `package.json` sorter.

## Usage

###### cli

<!-- automd:pm-x -->

```sh
# npm
npx @package-json/sort

# pnpm
pnpm dlx @package-json/sort

# bun
bunx @package-json/sort
```

<!-- /automd -->

###### programmatic

<!-- automd:file src="./test/fixture/example.ts" code -->

```ts [example.ts]
import { sort } from '@package-json/sort'

import packageJson from '../../package.json'

export default sort(packageJson)

```

<!-- /automd -->

## License

[MIT](../../LICENSE.md)
