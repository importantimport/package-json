export const sortDependencies = (dependencies: unknown) =>
  Object.fromEntries(
    Object.entries(dependencies as Record<string, unknown>)
      .sort(([depA], [depB]) => depA.localeCompare(depB)),
  )
