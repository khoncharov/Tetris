const I_SHAPE = [[1, 1, 1, 1]]

const J_SHAPE = [
  [2, 0, 0],
  [2, 2, 2],
]

const L_SHAPE = [
  [0, 0, 2],
  [2, 2, 2],
]

const O_SHAPE = [
  [3, 3],
  [3, 3],
]

const Z_SHAPE = [
  [4, 4, 0],
  [0, 4, 4],
]

const S_SHAPE = [
  [0, 4, 4],
  [4, 4, 0],
]

const T_SHAPE = [
  [0, 5, 0],
  [5, 5, 5],
]

export const shapeType = new Map([
  [0, I_SHAPE],
  [1, J_SHAPE],
  [2, L_SHAPE],
  [3, O_SHAPE],
  [4, Z_SHAPE],
  [5, S_SHAPE],
  [6, T_SHAPE],
])
