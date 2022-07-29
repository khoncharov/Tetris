import { getRandomInteger } from './utils.js'

export const I_SHAPE = {
  name: 'i-shape',
  index: 0,
  matrix: [[1, 1, 1, 1]],
  centerPos: new Map([
    [0, { i: 0, j: 2 }],
    [1, { i: 2, j: 0 }],
    [2, { i: 0, j: 2 }],
    [3, { i: 2, j: 0 }],
  ]),
}

export const J_SHAPE = {
  name: 'j-shape',
  index: 1,
  matrix: [
    [2, 0, 0],
    [2, 2, 2],
  ],
  centerPos: new Map([
    [0, { i: 1, j: 1 }],
    [1, { i: 1, j: 0 }],
    [2, { i: 0, j: 1 }],
    [3, { i: 1, j: 1 }],
  ]),
}

export const L_SHAPE = {
  name: 'l-shape',
  index: 2,
  matrix: [
    [0, 0, 2],
    [2, 2, 2],
  ],
  centerPos: new Map([
    [0, { i: 1, j: 1 }],
    [1, { i: 1, j: 0 }],
    [2, { i: 0, j: 1 }],
    [3, { i: 1, j: 1 }],
  ]),
}

export const O_SHAPE = {
  name: 'o-shape',
  index: 3,
  matrix: [
    [3, 3],
    [3, 3],
  ],
  centerPos: new Map([
    [0, { i: 0, j: 0 }],
    [1, { i: 0, j: 0 }],
    [2, { i: 0, j: 0 }],
    [3, { i: 0, j: 0 }],
  ]),
}

export const Z_SHAPE = {
  name: 'z-shape',
  index: 4,
  matrix: [
    [4, 4, 0],
    [0, 4, 4],
  ],
  centerPos: new Map([
    [0, { i: 1, j: 1 }],
    [1, { i: 1, j: 0 }],
    [2, { i: 1, j: 1 }],
    [3, { i: 1, j: 0 }],
  ]),
}

export const S_SHAPE = {
  name: 's-shape',
  index: 5,
  matrix: [
    [0, 4, 4],
    [4, 4, 0],
  ],
  centerPos: new Map([
    [0, { i: 1, j: 1 }],
    [1, { i: 1, j: 1 }],
    [2, { i: 1, j: 1 }],
    [3, { i: 1, j: 1 }],
  ]),
}

export const T_SHAPE = {
  name: 't-shape',
  index: 6,
  matrix: [
    [0, 5, 0],
    [5, 5, 5],
  ],
  centerPos: new Map([
    [0, { i: 1, j: 1 }],
    [1, { i: 1, j: 0 }],
    [2, { i: 0, j: 1 }],
    [3, { i: 1, j: 1 }],
  ]),
}

export const shapeType = new Map([
  [I_SHAPE.index, I_SHAPE],
  [J_SHAPE.index, J_SHAPE],
  [L_SHAPE.index, L_SHAPE],
  [O_SHAPE.index, O_SHAPE],
  [Z_SHAPE.index, Z_SHAPE],
  [S_SHAPE.index, S_SHAPE],
  [T_SHAPE.index, T_SHAPE],
])

export const getRandomShape = () => {
  return getRandomInteger(shapeType.size - 1)
}

export const getRandomShapeRotation = () => {
  return getRandomInteger(3)
}
