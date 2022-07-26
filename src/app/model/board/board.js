class Board {
  constructor(width, height) {
    this.board = this.create(width, height)
  }

  create = (width, height) => {
    const res = []
    for (let i = 0; i <= width; i += 1) {
      res.push([])
      for (let j = 0; j <= height; j += 1) {
        res[i].push(0)
      }
    }
    return res
  }

  reset = () => {
    this.board.forEach((row) => {
      row.forEach((item, index) => {
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
    const boardWidth = board[0].length
    const newArr = [...this.board.slice(0, index), ...this.board.slice(index + 1)]
    newArr.unshift(new Array(boardWidth).fill(0))
    return newArr
  }
}

const BOARD_WIDTH = 17
const BOARD_HEIGHT = 29

export const board = new Board(BOARD_WIDTH, BOARD_HEIGHT)
