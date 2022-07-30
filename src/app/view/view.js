import { gameModel } from '../model/model.js'
import { BLOCK_SIZE } from './const.js'

class GameView {
  constructor(gameModel) {
    this.game = gameModel
    this.board = document.querySelector('.game-board')
    this.setBoardSize()
    this.currShape = document.querySelector('.current-shape')
    this.nextShape = document.querySelector('.next-shape_container')
    this.startBtn = document.querySelector('#btn-start')
    this.resetBtn = document.querySelector('#btn-reset')
  }

  update = () => {
    if (this.game.isStarted) {
      this.startBtn.textContent = 'Pause'
      this.updateNextShape()
    } else {
      this.startBtn.textContent = 'Start'
    }
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

  createShape = (shapeType) => {
    const shapeContainer = document.createElement('div')
    shapeContainer.classList.add('shape')
    for (let i = 0; i < shapeType.length; i += 1) {
      for (let j = 0; j < shapeType[i].length; j += 1) {
        if (shapeType[i][j]) {
          const color = shapeType[i][j]
          const block = this.createBlock(color, i, j)
          shapeContainer.appendChild(block)
        }
      }
    }
    return shapeContainer
  }

  updateBoardView = () => {
    const board = this.game.boardArr
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
    const shape = this.createShape(this.game.nextShape.type)
    this.nextShape.innerHTML = ''
    this.nextShape.appendChild(shape)
  }

  updateCurrShape = () => {}

  resetCurrShape = () => {
    const shape = this.createShape(this.game.currShape.type)
    this.currShape.innerHTML = ''
    this.currShape.appendChild(shape)
  }
}

export const gameView = new GameView(gameModel)
