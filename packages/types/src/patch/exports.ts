import type { XOR } from '../lib/xor'

/**
 * The "exports" field is used to restrict external access to non-exported module files, also enables a module to import itself using "name".
 */
export type Exports = null | XOR<Record<string, unknown>, `./${string}`, `./${string}`[]>
