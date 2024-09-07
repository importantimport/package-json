export const sortFiles = (files: unknown) =>
  (files as string[])
    .sort(([fileA], [fileB]) => fileA.localeCompare(fileB))
