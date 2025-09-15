# @package-json

## [create](packages/create/)

Zero-config `package.json` creator.

```bash
npm create @package-json
```

## [sort](packages/sort/)

Opinionated `package.json` sorter.

```bash
npx @package-json/sort
```

## [types](packages/types/)

Auto-generated `package.json` types.

```ts
import type { PackageJson } from '@package-json/types'

const pkg: PackageJson = {
  name: 'foo',
  version: '1.0.0',
}
```

## License

[MIT](LICENSE.md)

<!-- automd:with-automd lastUpdate -->

---

_🤖 auto updated with [automd](https://automd.unjs.io) (last updated: Wed Sep 11 2024)_

<!-- /automd -->
