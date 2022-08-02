import assert from 'assert/strict'

import { Board } from '../board.js'
import { Shape } from '../shape.js'

console.time('Test time')

/* Can Shape move left */

const board = new Board(6, 10)

// left border collisions

let typeIndex = 3
let rotation = 0
let shape = new Shape(typeIndex, rotation)
shape.position = { top: 1, left: 3 }
let iterations = 0
while (board.canMoveLeft(shape)) {
  iterations += 1
  shape.moveLeft()
}
board.merge(shape)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0, 0],
  [3, 3, 0, 0, 0, 0],
  [3, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
])
assert.strictEqual(iterations, 3)

board.reset()
typeIndex = 5
rotation = 0
shape = new Shape(typeIndex, rotation)
shape.position = { top: 2, left: 4 }
iterations = 0
while (board.canMoveLeft(shape)) {
  iterations += 1
  shape.moveLeft()
}
board.merge(shape)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0, 0],
  [0, 4, 4, 0, 0, 0],
  [4, 4, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
])
assert.strictEqual(iterations, 3)

board.reset()
typeIndex = 0
rotation = 2
shape = new Shape(typeIndex, rotation)
shape.position = { top: 2, left: 3 }
iterations = 0
while (board.canMoveLeft(shape)) {
  iterations += 1
  shape.moveLeft()
}
board.merge(shape)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
])
assert.strictEqual(iterations, 1)

board.reset()
typeIndex = 0
rotation = 3
shape = new Shape(typeIndex, rotation)
shape.position = { top: 2, left: 5 }
iterations = 0
while (board.canMoveLeft(shape)) {
  iterations += 1
  shape.moveLeft()
}
board.merge(shape)
assert.deepStrictEqual(board.board, [
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
])
assert.strictEqual(iterations, 5)

// t-shape border collisions

board.reset()
typeIndex = 6
rotation = 0
shape = new Shape(typeIndex, rotation)
shape.position = { top: 2, left: 3 }
iterations = 0
while (board.canMoveLeft(shape)) {
  iterations += 1
  shape.moveLeft()
}
board.merge(shape)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0, 0],
  [0, 5, 0, 0, 0, 0],
  [5, 5, 5, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
])
assert.strictEqual(iterations, 2)

board.reset()
typeIndex = 6
rotation = 1
shape = new Shape(typeIndex, rotation)
shape.position = { top: 2, left: 3 }
iterations = 0
while (board.canMoveLeft(shape)) {
  iterations += 1
  shape.moveLeft()
}
board.merge(shape)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0, 0],
  [5, 0, 0, 0, 0, 0],
  [5, 5, 0, 0, 0, 0],
  [5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
])
assert.strictEqual(iterations, 3)

board.reset()
typeIndex = 6
rotation = 2
shape = new Shape(typeIndex, rotation)
shape.position = { top: 2, left: 3 }
iterations = 0
while (board.canMoveLeft(shape)) {
  iterations += 1
  shape.moveLeft()
}
board.merge(shape)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [5, 5, 5, 0, 0, 0],
  [0, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
])
assert.strictEqual(iterations, 2)

board.reset()
typeIndex = 6
rotation = 3
shape = new Shape(typeIndex, rotation)
shape.position = { top: 2, left: 3 }
iterations = 0
while (board.canMoveLeft(shape)) {
  iterations += 1
  shape.moveLeft()
}
board.merge(shape)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0, 0],
  [0, 5, 0, 0, 0, 0],
  [5, 5, 0, 0, 0, 0],
  [0, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
])
assert.strictEqual(iterations, 2)

// t-shape debris collision

board.board = [
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
]
typeIndex = 6
rotation = 3
shape = new Shape(typeIndex, rotation)
shape.position = { top: 2, left: 3 }
iterations = 0
while (board.canMoveLeft(shape)) {
  iterations += 1
  shape.moveLeft()
}
board.merge(shape)
assert.deepStrictEqual(board.board, [
  [1, 0, 0, 0, 0, 0],
  [1, 0, 5, 0, 0, 0],
  [1, 5, 5, 0, 0, 0],
  [1, 0, 5, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
])
assert.strictEqual(iterations, 1)

board.board = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 7, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
]
typeIndex = 6
rotation = 2
shape = new Shape(typeIndex, rotation)
shape.position = { top: 2, left: 3 }
iterations = 0
while (board.canMoveLeft(shape)) {
  iterations += 1
  shape.moveLeft()
}
board.merge(shape)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 5, 5, 5, 0],
  [0, 0, 7, 5, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
])
assert.strictEqual(iterations, 0)

board.board = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [7, 7, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
]
typeIndex = 6
rotation = 1
shape = new Shape(typeIndex, rotation)
shape.position = { top: 2, left: 4 }
iterations = 0
while (board.canMoveLeft(shape)) {
  iterations += 1
  shape.moveLeft()
}
board.merge(shape)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 5, 0, 0, 0],
  [0, 0, 5, 5, 0, 0],
  [7, 7, 5, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
])
assert.strictEqual(iterations, 2)

/* Test result */

console.log(`Board move-left tests - \x1b[1;36mDONE\x1b[0m`)
console.timeEnd('Test time')
