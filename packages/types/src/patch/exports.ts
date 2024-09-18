import type { XOR } from '../lib/xor'

interface Export {
  [k: string]: Export | string | undefined
  default?: Export | string
  import?: Export | string
  require?: Export | string
  types?: Export | string
}

interface TopLevelExport extends Record<`./${string}`, Export | string | undefined> {
  '.'?: Export | string
  './package.json'?: './package.json'
}

/**
 * The "exports" field is used to restrict external access to non-exported module files, also enables a module to import itself using "name".
 */
export type Exports = null | XOR<XOR<TopLevelExport, Export>, `./${string}`, `./${string}`[]>
