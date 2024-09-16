/**
 * Skip evaluating `U` if `T` is `unknown`.
 */
export type EvalIfNotUnknown<T, U> = unknown extends T ? never : U

/**
 * Resolve mapped types and show the derived keys and their types when hovering in
 * VS Code, instead of just showing the names those mapped types are defined with.
 */
export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

/**
 * Get the keys of T without any keys of U.
 */
export type Without<T, U> = {
  [P in Exclude<keyof T, keyof U>]?: never
}

/**
 * Restrict using either exclusively the keys of `T` or exclusively the keys of `U`.
 *
 * No unique keys of `T` can be used simultaneously with any unique keys of `U`.
 *
 * @example
 * ```ts
 * const myVar: XOR<{ data: object }, { error: object }>
 * ```
 *
 * Supports from 2 up to 3 generic parameters.
 *
 * More: https://github.com/maninak/ts-xor/tree/master#description
 */
export type XOR<A, B, C = unknown> = Prettify<(A & Without<B & C, A>) | (B & Without<A & C, B>) | EvalIfNotUnknown<C, C & Without<A & B, C>>>
