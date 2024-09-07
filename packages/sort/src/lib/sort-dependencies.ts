export const sortDependencies = (dependencies: unknown) =>
  Object.fromEntries(
    Object.entries(dependencies as Record<string, string>)
      .sort(([depA], [depB]) => depA.localeCompare(depB)),
  )
