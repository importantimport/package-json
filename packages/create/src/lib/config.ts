import { loadConfig } from 'unconfig'

export interface PackageJson extends Record<string, unknown> {
  name?: string
  private?: boolean
  type?: 'commonjs' | 'module'
  version?: string
}

export const { config } = await loadConfig<PackageJson>({
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
        private: undefined,
      }),
    },
  ],
})

export const defineConfig = (config: Partial<PackageJson>) => config
