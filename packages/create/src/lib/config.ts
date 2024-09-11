import type { PackageJson } from '@package-json/types'

import { loadConfig } from 'unconfig'

export const { config, sources } = await loadConfig<PackageJson>({
  sources: [
    {
      extensions: ['ts', 'mts', 'js', 'mjs'],
      files: 'pkgc.config',
    },
    {
      extensions: ['ts', 'mts', 'js', 'mjs'],
      files: 'package-json-create.config',
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
