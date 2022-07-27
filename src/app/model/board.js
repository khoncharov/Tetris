import { createMatrix } from './utils.js'

class Board {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.board = null
  }

  create = (color = 0) => {
    this.board = createMatrix(this.width, this.height, color)
  }

  merge = (shape) => {
    const shiftX = shape.position.left
    const shiftY = shape.position.top
    for (let i = 0; i < shape.height; i += 1) {
      for (let j = 0; j < shape.width; j += 1) {
        const color = shape.type[i][j]
        if (color) {
          this.board[i + shiftY][j + shiftX] = color
        }
      }
    }
  }

  _findFullRows = () => {
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
    const rowsToRemove = this._findFullRows()
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
}

export const BOARD_WIDTH = 17
export const BOARD_HEIGHT = 17

export const board = new Board(BOARD_WIDTH, BOARD_HEIGHT)
