import assert from 'assert/strict'

import { Board } from './board.js'
import { Shape } from './shape.js'

console.time('Test time')

/* Can Shape be ratated */

const board = new Board(6, 10)

board.create()
let typeIndex = 0
let rotation = 0
let shape = new Shape(typeIndex, rotation)
shape.position = { top: 8, left: 4 }
let iterations = 0
while (board.canRotate(shape)) {
  iterations += 1
  shape.rotate()
  if (iterations === 21) break
}
board.merge(shape)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 0],
])
assert.strictEqual(iterations, 21)

board.reset()
board.board = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 8, 8, 8],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
]
typeIndex = 0
rotation = 1
shape = new Shape(typeIndex, rotation)
shape.position = { top: 3, left: 2 }
iterations = 0
while (board.canRotate(shape)) {
  iterations += 1
  shape.rotate()
  if (iterations === 21) break
}
board.merge(shape)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 1, 8, 8, 8],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
])
assert.strictEqual(iterations, 0)

/* Test result */

console.log(`Board rotation tests - \x1b[1;36mDONE\x1b[0m`)
console.timeEnd('Test time')
