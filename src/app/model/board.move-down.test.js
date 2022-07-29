import assert from 'assert/strict'

import { board } from './board.js'
import { Shape } from './shape.js'

console.time('Test time')

/* Can Shape move down */

// i-shape border collisions
board.width = 6
board.height = 10
board.create()
let typeIndex = 0
let rotation = 0
let shape = new Shape(typeIndex, rotation)
shape.position = { top: 1, left: 2 }
let iterations = 0
while (board.canMoveDown(shape)) {
  iterations += 1
  shape.moveDown()
}
board.merge(shape)
assert.strictEqual(iterations, 8)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0],
])

board.reset()
typeIndex = 0
rotation = 1
shape = new Shape(typeIndex, rotation)
shape.position = { top: 1, left: 2 }
iterations = 0
while (board.canMoveDown(shape)) {
  iterations += 1
  shape.moveDown()
}
board.merge(shape)
assert.strictEqual(iterations, 7)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
])

board.reset()
typeIndex = 0
rotation = 2
shape = new Shape(typeIndex, rotation)
shape.position = { top: 1, left: 2 }
iterations = 0
while (board.canMoveDown(shape)) {
  iterations += 1
  shape.moveDown()
}
board.merge(shape)
assert.strictEqual(iterations, 8)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0],
])

board.reset()
typeIndex = 0
rotation = 3
shape = new Shape(typeIndex, rotation)
shape.position = { top: 1, left: 2 }
iterations = 0
while (board.canMoveDown(shape)) {
  iterations += 1
  shape.moveDown()
}
board.merge(shape)
assert.strictEqual(iterations, 7)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
])

// t-shape border collisions
board.reset()
typeIndex = 6
rotation = 0
shape = new Shape(typeIndex, rotation)
shape.position = { top: 1, left: 2 }
iterations = 0
while (board.canMoveDown(shape)) {
  iterations += 1
  shape.moveDown()
}
board.merge(shape)
assert.strictEqual(iterations, 8)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 5, 0, 0, 0],
  [0, 5, 5, 5, 0, 0],
])

board.reset()
typeIndex = 6
rotation = 1
shape = new Shape(typeIndex, rotation)
shape.position = { top: 1, left: 2 }
iterations = 0
while (board.canMoveDown(shape)) {
  iterations += 1
  shape.moveDown()
}
board.merge(shape)
assert.strictEqual(iterations, 7)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 5, 0, 0, 0],
  [0, 0, 5, 5, 0, 0],
  [0, 0, 5, 0, 0, 0],
])

board.reset()
typeIndex = 6
rotation = 2
shape = new Shape(typeIndex, rotation)
shape.position = { top: 1, left: 2 }
iterations = 0
while (board.canMoveDown(shape)) {
  iterations += 1
  shape.moveDown()
}
board.merge(shape)
assert.strictEqual(iterations, 7)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 5, 5, 5, 0, 0],
  [0, 0, 5, 0, 0, 0],
])

board.reset()
typeIndex = 6
rotation = 3
shape = new Shape(typeIndex, rotation)
shape.position = { top: 1, left: 2 }
iterations = 0
while (board.canMoveDown(shape)) {
  iterations += 1
  shape.moveDown()
}
board.merge(shape)
assert.strictEqual(iterations, 7)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 5, 0, 0, 0],
  [0, 5, 5, 0, 0, 0],
  [0, 0, 5, 0, 0, 0],
])

// t-shape debris collision
board.board = [
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0],
]
typeIndex = 6
rotation = 2
shape = new Shape(typeIndex, rotation)
shape.position = { top: 1, left: 2 }
iterations = 0
while (board.canMoveDown(shape)) {
  iterations += 1
  shape.moveDown()
}
board.merge(shape)
assert.deepStrictEqual(board.board, [
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 5, 5, 5, 0, 0],
  [1, 1, 5, 0, 0, 0],
  [1, 1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0],
])
assert.strictEqual(iterations, 4)

board.board = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 7, 0, 0, 0],
  [7, 7, 7, 0, 0, 0],
  [7, 7, 0, 0, 0, 0],
  [7, 7, 0, 0, 0, 0],
]
typeIndex = 6
rotation = 2
shape = new Shape(typeIndex, rotation)
shape.position = { top: 1, left: 2 }
iterations = 0
while (board.canMoveDown(shape)) {
  iterations += 1
  shape.moveDown()
}
board.merge(shape)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 5, 5, 5, 0, 0],
  [0, 0, 5, 0, 0, 0],
  [0, 0, 7, 0, 0, 0],
  [7, 7, 7, 0, 0, 0],
  [7, 7, 0, 0, 0, 0],
  [7, 7, 0, 0, 0, 0],
])
assert.strictEqual(iterations, 3)

board.board = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [7, 7, 0, 0, 0, 0],
  [7, 7, 0, 0, 0, 0],
  [7, 7, 0, 7, 7, 0],
]
typeIndex = 6
rotation = 1
shape = new Shape(typeIndex, rotation)
shape.position = { top: 1, left: 2 }
iterations = 0
while (board.canMoveDown(shape)) {
  iterations += 1
  shape.moveDown()
}
board.merge(shape)
assert.deepStrictEqual(board.board, [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [7, 7, 5, 0, 0, 0],
  [7, 7, 5, 5, 0, 0],
  [7, 7, 5, 7, 7, 0],
])
assert.strictEqual(iterations, 7)

/* Test result */

console.log(`Board2 tests - \x1b[1;36mDONE\x1b[0m (can shape move/rotate)`)
console.timeEnd('Test time')
