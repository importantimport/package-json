import { order } from "./order";

export const sort = (packageJson: Record<string, unknown>) =>
  Object.fromEntries(
    Object.entries(packageJson)
      .sort(([keyA], [keyB]) =>
        order.indexOf(keyA) - order.indexOf(keyB)
    )
  )