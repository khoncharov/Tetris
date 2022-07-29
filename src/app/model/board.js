import { Shape } from './shape.js'
import { createMatrix } from './utils.js'

export class Board {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.board = null
  }

  create = (color = 0) => {
    this.board = createMatrix(this.width, this.height, color)
  }

  reset = () => {
    this.create()
  }

  merge = (shape) => {
    const centerPos = shape.centerPos.get(shape.rotation)
    const shiftX = shape.position.left - centerPos.j
    const shiftY = shape.position.top - centerPos.i
    for (let i = 0; i < shape.height; i += 1) {
      for (let j = 0; j < shape.width; j += 1) {
        const color = shape.type[i][j]
        if (color) {
          this.board[i + shiftY][j + shiftX] = color
        }
      }
    }
  }

  #findFullRows = () => {
    const res = []
    this.board.forEach((row, index) => {
      const isFilled = row.every((item) => item > 0)
      if (isFilled) {
        res.push(index)
      }
    })
    return res
  }

  removeFullRows = () => {
    const rowsToRemove = this.#findFullRows()
    rowsToRemove.forEach((index) => {
      this.board = [...this.board.slice(0, index), ...this.board.slice(index + 1)]
      this.board.unshift(new Array(this.width).fill(0))
    })
    return rowsToRemove
  }

  isOverflown = () => {
    const OVERFLOW_ROW_INDEX = 2
    return this.board[OVERFLOW_ROW_INDEX].some((item) => item > 0)
  }

  canMoveDown = (shape) => {
    const shapeCopy = new Shape(shape.index, shape.rotation)
    shapeCopy.position = { ...shape.position }
    shapeCopy.moveDown()
    const centerPos = shapeCopy.centerPos.get(shapeCopy.rotation)

    // Check for collision with borders
    const borderCollisionAhead =
      this.height < shapeCopy.position.top - centerPos.i + shapeCopy.height

    if (borderCollisionAhead) {
      return false
    }

    // Check for collision with objects
    // const debrisCollisionAhead = checkDebrisCollision(shape)
    const shiftX = shapeCopy.position.left - centerPos.j
    const shiftY = shapeCopy.position.top - centerPos.i
    for (let i = 0; i < shapeCopy.height; i += 1) {
      for (let j = 0; j < shapeCopy.width; j += 1) {
        const isFilledShapeBlock = Boolean(shapeCopy.type[i][j])
        if (isFilledShapeBlock) {
          const isFilledBoardBlock = Boolean(this.board[i + shiftY][j + shiftX])
          if (isFilledBoardBlock) {
            return false
          }
        }
      }
    }

    return true
  }

  canMoveLeft = (shape) => {
    console.log('canShapeMoveLeft() Not implemented')
    return true
  }

  canMoveRight = (shape) => {
    console.log('canShapeMoveRight() Not implemented')
    return true
  }

  canRotate = (shape) => {
    console.log('canShapeRotate() Not implemented')
    return true
  }
}
