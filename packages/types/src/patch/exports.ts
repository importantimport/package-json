/**
 A mapping of conditions and the paths to which they resolve.
 */
interface ExportConditions {
  [condition: string]: Exports
}

/**
 * The "exports" field is used to restrict external access to non-exported module files, also enables a module to import itself using "name".
 */
export type Exports =
  | Array<ExportConditions | string>
  | ExportConditions
  | null
  | string
