import { mkdir, rm, writeFile } from 'node:fs/promises'

import { compile } from 'json-schema-to-typescript'

try {
  await rm('dist', { recursive: true })
}
catch {}

await mkdir('dist')

const schema = await fetch('https://json.schemastore.org/package.json')
  .then(async res => res.json()) as Parameters<typeof compile>[0]

const patchedDefinitions = [
  'packageExportsEntry',
  'packageExportsEntryPath',
  'packageExportsEntryObject',
  'packageExportsEntryOrFallback',
  'packageExportsFallback',
]

const deprecatedProperties = ['bundledDependencies', 'licenses', 'preferGlobal']
const externalProperties = ['ava', 'eslintConfig', 'jscpd', 'jspm', 'prettier', 'release', 'stylelint']
const patchedProperties = ['exports', 'engines', 'esnext', 'volta']

const types = await compile({
  ...schema,
  definitions: Object.fromEntries(
    Object.entries(schema.definitions ?? {}).filter(
      ([key]) => ![
        ...patchedDefinitions,
      ].includes(key),
    ),
  ),
  properties: Object.fromEntries(
    Object.entries(schema.properties ?? {}).filter(
      ([key]) => ![
        ...deprecatedProperties,
        ...externalProperties,
        ...patchedProperties,
      ].includes(key),
    ),
  ),
}, 'PackageJson')

await writeFile('src/types.d.ts', types)
