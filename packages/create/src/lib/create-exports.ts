import type { PackageJson } from '@package-json/types'

const moduleExports = {
  types: './dist/index.d.mts',
  // eslint-disable-next-line perfectionist/sort-objects
  default: './dist/index.mjs',
}

const commonjsExports = {
  types: './dist/index.d.cts',
  // eslint-disable-next-line perfectionist/sort-objects
  default: './dist/index.cjs',
}

export const createExports = ({ exports, files, main, module, type, types }: PackageJson): PackageJson => ({
  exports: exports ?? {
    '.': type === 'module'
      ? moduleExports
      : type === 'commonjs'
        ? commonjsExports
        : {
            import: moduleExports,
            require: commonjsExports,
          },
    './package.json': './package.json',
  },
  files: files ?? ['dist'],
  main: main ?? type === 'module' ? './dist/index.mjs' : './dist/index.cjs',
  module: module ?? type === undefined ? './dist/index.mjs' : undefined,
  types: types ?? './dist/index.d.ts',
})
