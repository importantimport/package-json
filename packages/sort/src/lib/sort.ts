import { order } from './order'

/**
 * Sort `package.json`.
 * @param packageJson package.json
 * @returns sorted package.json
 */
export const sort = (packageJson: Record<string, unknown>) =>
  Object.fromEntries(
    Object.entries(packageJson)
      .sort(([keyA], [keyB]) =>
        order.indexOf(keyA) - order.indexOf(keyB),
      ),
  )
