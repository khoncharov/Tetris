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

  #checkDebrisOverlap = (shape) => {
    const centerPos = shape.centerPos.get(shape.rotation)
    const shiftX = shape.position.left - centerPos.j
    const shiftY = shape.position.top - centerPos.i

    for (let i = 0; i < shape.height; i += 1) {
      for (let j = 0; j < shape.width; j += 1) {
        const isFilledShapeBlock = Boolean(shape.type[i][j])
        const isFilledBoardBlock = Boolean(this.board[i + shiftY][j + shiftX])
        if (isFilledShapeBlock && isFilledBoardBlock) {
          return true
        }
      }
    }

    return false
  }

  canMoveDown = (shape) => {
    const shapeCopy = new Shape(shape.index, shape.rotation)
    shapeCopy.position = { ...shape.position }
    shapeCopy.moveDown()

    const centerPos = shapeCopy.centerPos.get(shapeCopy.rotation)
    const bottomBorderCollision =
      shapeCopy.position.top + shapeCopy.height - centerPos.i > this.height
    if (bottomBorderCollision) {
      return false
    }

    const debrisOverlap = this.#checkDebrisOverlap(shapeCopy)
    if (debrisOverlap) {
      return false
    }

    return true
  }

  canMoveLeft = (shape) => {
    const shapeCopy = new Shape(shape.index, shape.rotation)
    shapeCopy.position = { ...shape.position }
    shapeCopy.moveLeft()

    const centerPos = shapeCopy.centerPos.get(shapeCopy.rotation)
    const leftBorderCollision = shapeCopy.position.left - centerPos.j < 0
    if (leftBorderCollision) {
      return false
    }

    const debrisOverlap = this.#checkDebrisOverlap(shapeCopy)
    if (debrisOverlap) {
      return false
    }

    return true
  }

  canMoveRight = (shape) => {
    const shapeCopy = new Shape(shape.index, shape.rotation)
    shapeCopy.position = { ...shape.position }
    shapeCopy.moveRight()

    const centerPos = shapeCopy.centerPos.get(shapeCopy.rotation)
    const rightBorderCollision =
      shapeCopy.position.left + shapeCopy.width - centerPos.j > this.width
    if (rightBorderCollision) {
      return false
    }

    const debrisOverlap = this.#checkDebrisOverlap(shapeCopy)
    if (debrisOverlap) {
      return false
    }

    return true
  }

  canRotate = (shape) => {
    console.log('canShapeRotate() Not implemented')
    return true
  }
}
