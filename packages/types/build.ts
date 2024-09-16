import { compile } from 'json-schema-to-typescript'
import { mkdir, rm, writeFile } from 'node:fs/promises'

try {
  await rm('dist', { recursive: true })
}
catch {}

await mkdir('dist')

const schema = await fetch('https://json.schemastore.org/package.json')
  .then(res => res.json())

const patchedDefinitions = [
  'packageExportsEntry',
  'packageExportsEntryPath',
  'packageExportsEntryObject',
  'packageExportsEntryOrFallback',
  'packageExportsFallback',
]

const deprecatedProperties = ['bundledDependencies', 'licenses', 'preferGlobal']
const externalProperties = ['ava', 'eslintConfig', 'jscpd', 'jspm', 'prettier', 'release', 'stylelint']
const patchedProperties = ['exports']

const types = await compile({
  ...schema,
  definitions: Object.fromEntries(
    Object.entries(schema.definitions).filter(
      ([key]) => ![
        ...patchedDefinitions,
      ].includes(key),
    ),
  ),
  properties: Object.fromEntries(
    Object.entries(schema.properties).filter(
      ([key]) => ![
        ...deprecatedProperties,
        ...externalProperties,
        ...patchedProperties,
      ].includes(key),
    ),
  ),
}, 'PackageJson')

await writeFile('src/types.d.ts', types)
