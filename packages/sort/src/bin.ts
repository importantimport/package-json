import { glob, readFile, writeFile } from 'node:fs/promises'
import { cwd } from 'node:process'
import { parseArgs } from 'node:util'

import { sort } from './lib/sort'

const args = parseArgs({
  args: ['--cwd', '--glob'],
  options: {
    cwd: {
      default: cwd(),
      type: 'string',
    },
    glob: {
      default: '**/package.json',
      type: 'string',
    },
  },
})

for await (const entry of glob(args.values.glob ?? '**/package.json', {
  cwd: args.values.cwd,
  exclude: fileName => !fileName.endsWith('package.json'),
})) {
  const text = await readFile(entry, { encoding: 'utf8' })
  const json = JSON.parse(text)
  await writeFile(entry, JSON.stringify(sort(json), null, 2))
}
