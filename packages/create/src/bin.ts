import { writeFile } from 'node:fs/promises'

import { create } from './lib/create'

await writeFile('package.json', `${JSON.stringify(create(), null, 2)}\n`)
// eslint-disable-next-line no-console
console.log('✔ Created package.json')
