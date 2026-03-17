export type Author = null | Person | string

interface Person {
  [k: string]: unknown
  email?: string
  name: string
  url?: string
}
