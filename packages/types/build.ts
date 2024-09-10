import { compile } from 'json-schema-to-typescript'
import { mkdir, rm, writeFile } from 'node:fs/promises'

try {
  await rm('dist', { recursive: true })
}
catch {}

await mkdir('dist')

const schema = await fetch('https://json.schemastore.org/package.json')
  .then(res => res.json())

const types = await compile({
  ...schema,
  properties: Object.fromEntries(
    Object.entries(schema.properties).filter(
      ([key]) => !['ava', 'eslintConfig', 'jscpd', 'jspm', 'prettier', 'release', 'stylelint'].includes(key),
    ),
  ),
}, 'PackageJson')

await writeFile('dist/index.d.ts', `
${types}
export { JSONSchemaForNPMPackageJsonFiles as PackageJson, JSONSchemaForNPMPackageJsonFiles as default }
`)
await writeFile('dist/index.js', 'export default {}')
