import assert from 'assert/strict'

import { Board } from './board.js'
import { Shape } from './shape.js'

console.time('Test time')

/* Create/reset board */

const board = new Board(1, 1)

// 1
board.width = 5
board.height = 5
board.reset(8)
assert.deepStrictEqual(board.board, [
  [8, 8, 8, 8, 8],
  [8, 8, 8, 8, 8],
  [8, 8, 8, 8, 8],
  [8, 8, 8, 8, 8],
  [8, 8, 8, 8, 8],
])

// 2
board.width = 1
board.height = 1
board.reset(1)
assert.deepStrictEqual(board.board, [[1]])

// 3
board.width = 4
board.height = 2
board.reset(5)
assert.deepStrictEqual(board.board, [
  [5, 5, 5, 5],
  [5, 5, 5, 5],
])

// 4
board.reset()
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
])

/* Shape merge */

// 1
let typeIndex = 6
let rotation = 2
let shape = new Shape(typeIndex, rotation)
shape.position = { top: 1, left: 2 }
board.width = 5
board.height = 5
board.reset()
board.merge(shape)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0],
  [0, 5, 5, 5, 0],
  [0, 0, 5, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
])

// 2
typeIndex = 0
rotation = 1
shape = new Shape(typeIndex, rotation)
shape.position = { top: 3, left: 1 }
board.width = 5
board.height = 5
board.reset()
board.merge(shape)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0],
])

shape.rotate()
shape.moveRight()
shape.moveRight()
board.merge(shape)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 0, 0],
])

/* Find full row and remove */

// 1
board.width = 3
board.height = 5
board.board = [
  [3, 1, 5],
  [1, 4, 1],
  [6, 2, 2],
  [7, 2, 2],
  [8, 2, 2],
]
let removedRows = board.removeFullRows()
assert.deepStrictEqual(removedRows, [0, 1, 2, 3, 4])
assert.deepStrictEqual(board.board, [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
])

// 2
board.width = 3
board.height = 5
board.board = [
  [3, 1, 5],
  [0, 0, 1],
  [6, 2, 2],
  [7, 2, 2],
  [0, 0, 2],
]
removedRows = board.removeFullRows()
assert.deepStrictEqual(removedRows, [0, 2, 3])
assert.deepStrictEqual(board.board, [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 1],
  [0, 0, 2],
])

// 3
board.width = 3
board.height = 3
board.board = [
  [0, 0, 0],
  [1, 4, 1],
  [2, 2, 0],
]
removedRows = board.removeFullRows()
assert.deepStrictEqual(removedRows, [1])
assert.deepStrictEqual(board.board, [
  [0, 0, 0],
  [0, 0, 0],
  [2, 2, 0],
])

// 4
board.width = 3
board.height = 3
board.board = [
  [0, 1, 0],
  [0, 4, 1],
  [2, 2, 0],
]
removedRows = board.removeFullRows()
assert.deepStrictEqual(removedRows, [])
assert.deepStrictEqual(board.board, [
  [0, 1, 0],
  [0, 4, 1],
  [2, 2, 0],
])

/* Overflow check */

// 1
board.width = 3
board.height = 5
board.board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
]
assert(board.isOverflown() === false)

// 2
board.width = 3
board.height = 5
board.board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 2],
  [1, 0, 2],
  [1, 2, 2],
]
assert(board.isOverflown() === true)

/* Test result */

console.log(`Board tests - \x1b[1;36mDONE\x1b[0m`)
console.timeEnd('Test time')
