import { GAME_PAUSED, INIT_LEVEL, INIT_SCORE } from '../const.js'
import { BLOCK_SIZE } from './const.js'

export class GameView {
  constructor(gameModel) {
    this.game = gameModel
    this.board = document.querySelector('.game-board')
    this.setBoardSize()
    this.updateBoard()
    this.shape = document.querySelector('.shape-container')
    this.nextShape = document.querySelector('.next-shape-container')
    this.startBtn = document.querySelector('#btn-start')
    this.level = document.querySelector('#game-level')
    this.score = document.querySelector('#game-score')
    this.bestScore = document.querySelector('#best-score')
    this.updateStats()
    this.results = document.querySelector('.results')
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

  createBlocksRow = (rowIndex) => {
    const blocksRow = document.createElement('div')
    blocksRow.classList.add('blocks-row')
    blocksRow.style.top = `${rowIndex * BLOCK_SIZE}px`

    this.game.board.board[rowIndex].forEach((color, colomn) => {
      const block = this.createBlock(color, 0, colomn)
      blocksRow.appendChild(block)
    })

    return blocksRow
  }

  createShape = (shape) => {
    const shapeContainer = document.createElement('div')
    shapeContainer.classList.add('shape')

    for (let i = 0; i < shape.height; i += 1) {
      for (let j = 0; j < shape.width; j += 1) {
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

  updateStats = () => {
    this.level.innerHTML = `${this.game.level !== null ? this.game.level : INIT_LEVEL}`
    this.score.innerHTML = `${this.game.score !== null ? this.game.score : INIT_SCORE}`
    this.bestScore.innerHTML = `${this.game.bestScore}`
  }

  updateBoard = () => {
    this.board.innerHTML = ''

    for (let row = 0; row < this.game.board.height; row += 1) {
      const blocksRow = this.createBlocksRow(row)
      this.board.appendChild(blocksRow)
    }
  }

  updateNextShape = () => {
    this.nextShape.innerHTML = ''
    if (this.game.nextShape) {
      const shape = this.createShape(this.game.nextShape)
      this.nextShape.appendChild(shape)
    }
  }

  updateShape = () => {
    this.shape.innerHTML = ''
    if (this.game.shape) {
      this.updateShapePosition()
      const shape = this.createShape(this.game.shape)
      this.shape.appendChild(shape)
    }
  }

  updateShapePosition = () => {
    if (this.game.shape) {
      const center = this.game.shape.centerPos.get(this.game.shape.rotation)
      const i = this.game.shape.position.top - center.i
      const j = this.game.shape.position.left - center.j
      this.shape.style.top = `${i * BLOCK_SIZE}px`
      this.shape.style.left = `${j * BLOCK_SIZE}px`
    }
  }

  showResults = () => {
    this.results.parentElement.classList.remove('hidden')
    this.results.querySelector('#game-result-level').innerHTML = this.game.level
    this.results.querySelector('#game-result-score').innerHTML = this.game.score
    this.results.querySelector('#best-result-score').innerHTML = this.game.bestScore
  }

  hideResults = () => {
    this.results.parentElement.classList.add('hidden')
  }

  showPauseAnimation = () => {
    this.game.state === GAME_PAUSED
      ? this.shape.classList.add('pause-animation')
      : this.shape.classList.remove('pause-animation')
  }
}
