import assert from 'assert/strict'
import { createMatrix } from './utils.js'

/* Create matrix */

let m = createMatrix(2, 4)
assert.deepStrictEqual(m, [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
])
m = createMatrix(2, 3, 8)
assert.deepStrictEqual(m, [
  [8, 8],
  [8, 8],
  [8, 8],
])

/* Test result */

console.log(`Utils tests - \x1b[1;36mDONE\x1b[0m`)
