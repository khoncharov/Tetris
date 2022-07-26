import assert from 'assert/strict'

import { board } from './board.js'

/* Create board */

// 1
board.width = 5
board.height = 5
board.create(8)
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
board.create(1)
assert.deepStrictEqual(board.board, [[1]])

// 3
board.width = 4
board.height = 2
board.create(5)
assert.deepStrictEqual(board.board, [
  [5, 5, 5, 5],
  [5, 5, 5, 5],
])

/* Shape merge */

// 1
let shape = {
  width: 3,
  height: 2,
  type: [
    [1, 1, 1],
    [0, 1, 0],
  ],
  position: { top: 0, left: 0 },
}

board.width = 5
board.height = 5
board.create()
board.merge(shape)

assert.deepStrictEqual(board.board, [
  [1, 1, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
])

// 2.1
shape = {
  width: 2,
  height: 3,
  type: [
    [2, 2],
    [0, 2],
    [0, 2],
  ],
  position: { top: 1, left: 3 },
}

board.width = 5
board.height = 4
board.create()
board.merge(shape)

assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 2, 2],
  [0, 0, 0, 0, 2],
  [0, 0, 0, 0, 2],
])

// 2.2
shape = {
  width: 2,
  height: 2,
  type: [
    [3, 3],
    [3, 3],
  ],
  position: { top: 2, left: 2 },
}

board.merge(shape)

assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 2, 2],
  [0, 0, 3, 3, 2],
  [0, 0, 3, 3, 2],
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
let rowsToRemove = board._findFullRows()
assert.deepStrictEqual(rowsToRemove, [0, 1, 2, 3, 4])

let removedRows = board.removeFullRows()
assert.deepStrictEqual(removedRows, rowsToRemove)
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
rowsToRemove = board._findFullRows()
assert.deepStrictEqual(rowsToRemove, [0, 2, 3])

removedRows = board.removeFullRows()
assert.deepStrictEqual(removedRows, rowsToRemove)
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
rowsToRemove = board._findFullRows()
assert.deepStrictEqual(rowsToRemove, [1])

removedRows = board.removeFullRows()
assert.deepStrictEqual(removedRows, rowsToRemove)
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
rowsToRemove = board._findFullRows()
assert.deepStrictEqual(rowsToRemove, [])

removedRows = board.removeFullRows()
assert.deepStrictEqual(removedRows, rowsToRemove)
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
