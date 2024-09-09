import { loadConfig } from 'unconfig'

import type { PackageJson } from './types'

export const { config, sources } = await loadConfig<PackageJson>({
  sources: [
    {
      extensions: ['ts', 'mts', 'js', 'mjs'],
      files: 'pkgc.config',
      parser: 'import',
    },
    {
      extensions: ['ts', 'mts', 'js', 'mjs'],
      files: 'package-json-create.config',
      parser: 'import',
    },
    {
      extensions: [],
      files: 'package.json',
      parser: 'json',
      rewrite: pkg => ({
        ...pkg,
        bin: undefined,
        dependencies: undefined,
        description: undefined,
        devDependencies: undefined,
        exports: undefined,
        keywords: undefined,
        main: undefined,
        module: undefined,
        packageManager: undefined,
        peerDependencies: undefined,
        private: undefined,
        scripts: undefined,
        types: undefined,
      }),
    },
  ],
})

export const defineConfig = (config: Partial<PackageJson>) => config
