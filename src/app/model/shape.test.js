import assert from 'assert/strict'

import { Shape } from './shape.js'

console.time('Test time')

/* New shapes */

const testNewShape = (shapeIndex, rotation, expertedShape) => {
  let s = new Shape(shapeIndex, rotation)
  assert.deepStrictEqual(s.type, expertedShape)
  assert.strictEqual(s.rotation, rotation)
  assert.strictEqual(s.width, expertedShape[0].length)
  assert.strictEqual(s.height, expertedShape.length)
  assert(s.position === null)
}

let shapeIndex = 0
let rotation = 3
let expertedShape = [[1], [1], [1], [1]]
testNewShape(shapeIndex, rotation, expertedShape)

shapeIndex = 1
rotation = 3
expertedShape = [
  [0, 2],
  [0, 2],
  [2, 2],
]
testNewShape(shapeIndex, rotation, expertedShape)

shapeIndex = 6
rotation = 2
expertedShape = [
  [5, 5, 5],
  [0, 5, 0],
]
testNewShape(shapeIndex, rotation, expertedShape)

/* Rotation test */

let shape = new Shape(1, 0)
assert.deepStrictEqual(shape.type, [
  [2, 0, 0],
  [2, 2, 2],
])
assert.strictEqual(shape.rotation, 0)

shape.rotate()
assert.deepStrictEqual(shape.type, [
  [2, 2],
  [2, 0],
  [2, 0],
])
assert.strictEqual(shape.rotation, 1)

shape.rotate()
assert.deepStrictEqual(shape.type, [
  [2, 2, 2],
  [0, 0, 2],
])
assert.strictEqual(shape.rotation, 2)

shape.rotate()
assert.deepStrictEqual(shape.type, [
  [0, 2],
  [0, 2],
  [2, 2],
])
assert.strictEqual(shape.rotation, 3)

shape.rotate()
assert.deepStrictEqual(shape.type, [
  [2, 0, 0],
  [2, 2, 2],
])
assert.strictEqual(shape.rotation, 0)

shape = new Shape(0, 0)
assert.deepStrictEqual(shape.type, [[1, 1, 1, 1]])
assert.strictEqual(shape.rotation, 0)
shape.rotate()
assert.deepStrictEqual(shape.type, [[1], [1], [1], [1]])
assert.strictEqual(shape.rotation, 1)
shape.rotate()
assert.deepStrictEqual(shape.type, [[1, 1, 1, 1]])
assert.strictEqual(shape.rotation, 2)
shape.rotate()
assert.deepStrictEqual(shape.type, [[1], [1], [1], [1]])
assert.strictEqual(shape.rotation, 3)
shape.rotate()
assert.deepStrictEqual(shape.type, [[1, 1, 1, 1]])
assert.strictEqual(shape.rotation, 0)

/* Shape positioning */

let s2 = new Shape(1, 1)
s2.position = { top: 10, left: 5 }
s2.moveDown()
s2.moveLeft()
s2.moveDown()
s2.moveDown()
s2.rotate()
s2.moveLeft()
s2.moveDown()
s2.moveRight()
s2.rotate()
s2.moveRight()
s2.moveLeft()
s2.moveDown()
s2.moveLeft()
s2.moveLeft()
s2.moveDown()
s2.rotate()
assert.deepEqual(s2.position, { top: 10 + 6, left: 5 - 5 + 2 })

/* Test result */

console.log(`Shape tests - \x1b[1;36mDONE\x1b[0m`)
console.timeEnd('Test time')
