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
