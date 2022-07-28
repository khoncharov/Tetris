// import assert from 'assert/strict'

// import { I_SHAPE, J_SHAPE } from './shape-types.js'
// import { Shape } from './shape.js'

// /* Rotation test */

// const s0 = new Shape()
// console.log('>>>>>')
// console.log(s0.type)
// console.log(s0.rotation)
// console.log(s0.width)
// console.log(s0.height)
// console.log('>>>>>')

// let shape = new Shape(J_SHAPE, 0)
// assert.deepStrictEqual(shape.type, [
//   [2, 0, 0],
//   [2, 2, 2],
// ])
// assert(shape.rotation === 0)
// shape.rotate()
// assert.deepStrictEqual(shape.type, [
//   [2, 2],
//   [2, 0],
//   [2, 0],
// ])
// assert(shape.rotation === 1)
// shape.rotate()
// assert.deepStrictEqual(shape.type, [
//   [2, 2, 2],
//   [0, 0, 2],
// ])
// assert(shape.rotation === 2)
// shape.rotate()
// assert.deepStrictEqual(shape.type, [
//   [0, 2],
//   [0, 2],
//   [2, 2],
// ])
// assert(shape.rotation === 3)
// shape.rotate()
// assert.deepStrictEqual(shape.type, [
//   [2, 0, 0],
//   [2, 2, 2],
// ])
// assert(shape.rotation === 0)

// shape = new Shape(I_SHAPE, 0)
// assert.deepStrictEqual(shape.type, [[1, 1, 1, 1]])
// assert(shape.rotation === 0)
// shape.rotate()
// assert.deepStrictEqual(shape.type, [[1], [1], [1], [1]])
// assert(shape.rotation === 1)
// shape.rotate()
// assert.deepStrictEqual(shape.type, [[1, 1, 1, 1]])
// assert(shape.rotation === 2)
// shape.rotate()
// assert.deepStrictEqual(shape.type, [[1], [1], [1], [1]])
// assert(shape.rotation === 3)
// shape.rotate()
// assert.deepStrictEqual(shape.type, [[1, 1, 1, 1]])
// assert(shape.rotation === 0)

// /* Test result */

// console.log(`Shape tests - \x1b[1;36mDONE\x1b[0m`)
