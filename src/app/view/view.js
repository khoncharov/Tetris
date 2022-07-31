import { GAME_PAUSED, GAME_STARTED } from '../const.js'
import { BLOCK_SIZE } from './const.js'

export class GameView {
  constructor(gameModel) {
    this.game = gameModel
    this.board = document.querySelector('.game-board')
    this.setBoardSize()
    this.shape = document.querySelector('.shape-container')
    this.nextShape = document.querySelector('.next-shape-container')
    this.startBtn = document.querySelector('#btn-start')
    this.resetBtn = document.querySelector('#btn-reset')
  }

  setBoardSize = () => {
    const boardWidth = this.game.board.width
    const boardHeight = this.game.board.height
    this.board.style.width = `${BLOCK_SIZE * boardWidth}px`
    this.board.style.height = `${BLOCK_SIZE * boardHeight}px`
  }

  createBlock = (color, row, colomn) => {
    const block = document.createElement('div')
    block.classList.add('block')
    block.classList.add(`block-${color}`)
    block.style.top = `${row * BLOCK_SIZE}px`
    block.style.left = `${colomn * BLOCK_SIZE}px`
    return block
  }

  createBlocksRow = (row) => {
    const blocksRow = document.createElement('div')
    blocksRow.classList.add('blocks-row')
    blocksRow.style.top = `${row * BLOCK_SIZE}px`
    return blocksRow
  }

  createShape = (shape) => {
    const shapeContainer = document.createElement('div')
    shapeContainer.classList.add('shape')
    for (let i = 0; i < shape.type.length; i += 1) {
      for (let j = 0; j < shape.type[i].length; j += 1) {
        if (shape.type[i][j]) {
          const color = shape.type[i][j]
          const block = this.createBlock(color, i, j)
          shapeContainer.appendChild(block)
        }
      }
    }
    shapeContainer.style.width = `${shape.width * BLOCK_SIZE}px`
    shapeContainer.style.height = `${shape.height * BLOCK_SIZE}px`
    return shapeContainer
  }

  updateStats = () => {}

  updateBoard = () => {
    const board = this.game.board.board
    this.board.innerHTML = ''

    for (let row = 0; row < board.length; row += 1) {
      const blocksRow = this.createBlocksRow(row)
      board[row].forEach((color, colomn) => {
        const block = this.createBlock(color, 0, colomn)
        blocksRow.appendChild(block)
      })
      this.board.appendChild(blocksRow)
    }
  }

  updateNextShape = () => {
    const shape = this.createShape(this.game.nextShape)
    this.nextShape.innerHTML = ''
    this.nextShape.appendChild(shape)
  }

  updateShape = () => {
    this.shape.innerHTML = ''
    const shape = this.createShape(this.game.shape)
    this.shape.appendChild(shape)
  }

  updateShapePosition = () => {
    const center = this.game.shape.centerPos.get(this.game.shape.rotation)
    const i = this.game.shape.position.top - center.i
    const j = this.game.shape.position.left - center.j
    this.shape.style.top = `${i * BLOCK_SIZE}px`
    this.shape.style.left = `${j * BLOCK_SIZE}px`
  }
}
