import { compile } from 'json-schema-to-typescript'
import { mkdir, rm, writeFile } from 'node:fs/promises'

try {
  await rm('dist', { recursive: true })
}
catch {}

await mkdir('dist')

const schema = await fetch('https://json.schemastore.org/package.json')
  .then(res => res.json())

const deprecated = ['bundledDependencies', 'licenses', 'preferGlobal']
const external = ['ava', 'eslintConfig', 'jscpd', 'jspm', 'prettier', 'release', 'stylelint']

const types = await compile({
  ...schema,
  properties: Object.fromEntries(
    Object.entries(schema.properties).filter(
      ([key]) => ![
        ...deprecated,
        ...external,
      ].includes(key),
    ),
  ),
}, 'PackageJson')

await writeFile('src/types.d.ts', types)
