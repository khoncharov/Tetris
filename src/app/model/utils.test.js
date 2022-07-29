import assert from 'assert/strict'
import { createMatrix, getRandomInteger } from './utils.js'

console.time('Test time')

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

/* Get random integer */

let randIntArr = []
for (let i = 0; i < 100; i += 1) {
  randIntArr.push(getRandomInteger(2))
}
assert(randIntArr.every((item) => item >= 0 && item <= 2))
assert(randIntArr.some((item) => item !== 0))
assert(randIntArr.some((item) => item !== 1))
assert(randIntArr.some((item) => item !== 2))

/* Test result */

console.log(`Utils tests - \x1b[1;36mDONE\x1b[0m`)
console.timeEnd('Test time')
