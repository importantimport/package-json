import { describe, expect, it } from 'vitest'

import { sortDependencies } from '../src/lib/sort-dependencies'

describe('sortDependencies', () => {
  it('sortDependencies', () => {
    /* eslint-disable perfectionist/sort-objects */
    const json = sortDependencies({
      'automd': '^0.3.8',
      'bumpp': '^9.5.2',
      'eslint': '^9.10.0',
      '@importantimport/eslint-config': '1.0.0-alpha.2',
      '@importantimport/tsconfig': '^0.1.1',
      'jiti': '^1.21.6',
      'pkgroll': '^2.4.2',
      '@types/eslint': '^9.6.1',
      '@types/node': '^22.5.4',
      'vitest': '^2.0.5',
      '@antfu/eslint-config': '^3.3.2',
    })
    /* eslint-enable perfectionist/sort-objects */

    expect(json).toStrictEqual({
      '@antfu/eslint-config': '^3.3.2',
      '@importantimport/eslint-config': '1.0.0-alpha.2',
      '@importantimport/tsconfig': '^0.1.1',
      '@types/eslint': '^9.6.1',
      '@types/node': '^22.5.4',
      'automd': '^0.3.8',
      'bumpp': '^9.5.2',
      'eslint': '^9.10.0',
      'jiti': '^1.21.6',
      'pkgroll': '^2.4.2',
      'vitest': '^2.0.5',
    })
  })
})
