import type { Linter } from 'eslint'

import antfu from '@antfu/eslint-config'
import ii from '@importantimport/eslint-config'

export default antfu({
  jsonc: true,
  test: true,
  typescript: true,
})
  .append(ii({ functional: false })) as Linter.Config
