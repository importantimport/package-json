import { order, orderKeys } from './order'

/**
 * Sort `package.json`.
 * @param packageJson package.json
 * @returns sorted package.json
 */
export const sort = (packageJson: Record<string, unknown> | string): Record<string, unknown> =>
  Object.fromEntries(
    Object.entries(
      packageJson instanceof Object
        ? packageJson
        : JSON.parse(packageJson),
    )
      .filter(([_, value]) => !!value)
      .sort(([keyA], [keyB]) => orderKeys.indexOf(keyA) - orderKeys.indexOf(keyB))
      .map(([k, v]) => [k, order.find(({ key }) => key === k)?.sort(v)]),
  )
