import { getRandomInteger } from './utils.js'

export const I_SHAPE = {
  name: 'i-shape',
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
  [0, I_SHAPE],
  [1, J_SHAPE],
  [2, L_SHAPE],
  [3, O_SHAPE],
  [4, Z_SHAPE],
  [5, S_SHAPE],
  [6, T_SHAPE],
])

export const getRandomShape = () => {
  return getRandomInteger(shapeType.size - 1)
}

export const getRandomShapeRotation = () => {
  return getRandomInteger(3)
}
