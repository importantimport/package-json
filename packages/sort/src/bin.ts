import { glob, readFile, writeFile } from 'node:fs/promises'

import { sort } from './lib/sort'

for await (const entry of glob('**/package.json', {
  exclude: fileName => !fileName.endsWith('package.json'),
})) {
  const text = await readFile(entry, { encoding: 'utf8' })
  const json = JSON.parse(text)
  await writeFile(entry, JSON.stringify(sort(json), null, 2))
}
