import { describe, expect, it } from 'vitest'

import { sort } from '../src'

describe('sort', () => {
  it('object', () => {
    const json = sort({
      name: '@package-json/test',
      private: true,
      type: 'module',
    })

    expect(Object.keys(json)).toStrictEqual(['name', 'type', 'private'])
  })

  it('string', () => {
    const json = sort(JSON.stringify({
      name: '@package-json/test',
      private: true,
      type: 'module',
    }))

    expect(Object.keys(json)).toStrictEqual(['name', 'type', 'private'])
  })

  // it('template', () => {
  //   const json = sort`{
  //     "name": "@package-json/test",
  //     "private": true,
  //     "type": "module"
  //   }`

  //   expect(Object.keys(json)).toStrictEqual(['name', 'type', 'private'])
  // })
})
