export const getScope = (name?: string) =>
  (name && name.startsWith('@'))
    ? `${name.split('/')[0]}/`
    : undefined
