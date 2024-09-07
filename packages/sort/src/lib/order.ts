import { sortDependencies } from './sort-dependencies'
import { sortFiles } from './sort-files'

/** @see {@link https://github.com/antfu/eslint-config/blob/d2f6c0bd7887764f9778cba3722110dbb0e0027e/src/configs/sort.ts#L25-L68} */
export const order = [
  '$schema',
  'publisher',
  'name',
  'displayName',
  'type',
  'version',
  'private',
  'packageManager',
  'description',
  'author',
  'contributors',
  'license',
  'funding',
  'homepage',
  'repository',
  'bugs',
  'keywords',
  'categories',
  'sideEffects',
  'exports',
  'main',
  'module',
  // 'unpkg', // not recommended
  // 'jsdelivr', // not recommended
  'types',
  'typesVersions',
  'bin',
  'icon',
  { key: 'files', sort: sortFiles },
  'engines',
  'activationEvents',
  'contributes',
  'scripts',
  { key: 'peerDependencies', sort: sortDependencies },
  { key: 'peerDependenciesMeta', sort: sortDependencies },
  { key: 'dependencies', sort: sortDependencies },
  { key: 'optionalDependencies', sort: sortDependencies },
  { key: 'devDependencies', sort: sortDependencies },
  'pnpm',
  'overrides',
  'resolutions',
  'husky',
  'simple-git-hooks',
  'lint-staged',
  // 'eslintConfig', // not recommended
].map(key => typeof key === 'string' ? { key, sort: (v: unknown) => v } : key)

export const orderKeys = order.map(({ key }) => key)
