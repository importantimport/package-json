import type { PackageJson, PackageJsonExport, PackageJsonExports } from './types'

const moduleExports: PackageJsonExport = {
  types: './dist/index.d.mts',
  // eslint-disable-next-line perfectionist/sort-objects
  default: './dist/index.mjs',
}

const commonjsExports: PackageJsonExport = {
  types: './dist/index.d.cts',
  // eslint-disable-next-line perfectionist/sort-objects
  default: './dist/index.cjs',
}

export const createExports = ({ exports, files, main, module, type }: PackageJson): PackageJsonExports => ({
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
})
