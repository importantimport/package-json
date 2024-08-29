import antfu from '@antfu/eslint-config'
import ii from '@importantimport/eslint-config'
import { Linter } from 'eslint'

export default antfu({ jsonc: true })
  .append(ii({ functional: false })) as Linter.Config
