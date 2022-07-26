class Board {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.board = this.create()
  }

  create = () => {
    const res = []
    for (let i = 0; i <= this.width; i += 1) {
      res.push([])
      for (let j = 0; j <= this.height; j += 1) {
        res[i].push(0)
      }
    }
    return res
  }

  reset = () => {
    this.board.forEach((row) => {
      row.forEach((_, index) => {
        row[index] = 0
      })
    })
  }

  merge = (shape) => {
    const shiftX = shape.position.top
    const shiftY = shape.position.left
    for (let i = 0; i < shape.type.length; i += 1) {
      for (let j = 0; j < shape.type[0].length; j += 1) {
        const color = shape.type[i][j]
        if (color) {
          this.board[i + shiftX - 1][j + shiftY] = shape.type[i][j]
        }
      }
    }
  }

  findFullRows = () => {
    const res = []
    this.board.forEach((row, index) => {
      const isFilled = row.every((item) => item > 0)
      if (isFilled) {
        res.push(index)
      }
    })
    return res
  }

  removeRow = (index) => {
    const newArr = [...this.board.slice(0, index), ...this.board.slice(index + 1)]
    newArr.unshift(new Array(this.board.width).fill(0))
    return newArr
  }

  isOverflown = () => {
    const OVERFLOW_ROW_INDEX = 3
    return this.board[OVERFLOW_ROW_INDEX].some((item) => item > 0)
  }
}

export const BOARD_WIDTH = 17
export const BOARD_HEIGHT = 29

export const board = new Board(BOARD_WIDTH, BOARD_HEIGHT)
