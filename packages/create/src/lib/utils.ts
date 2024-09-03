/**
 * Get package name scope
 * @param name package name
 * @returns scope
 * @examples
 * ```ts
 * getScope('foo-bar') // undefined
 * getScope('@foo') // '@foo'
 * getScope('@foo/bar') // '@foo'
 * ```
 */
export const getScope = (name?: string) =>
  (name && name.startsWith('@'))
    ? `${name.split('/')[0]}/`
    : undefined
