import { Shape } from './shape.js'
import { Board } from './board.js'
import { getRandomShapeRotation, getRandomShape } from './shape-types.js'
import { GAME_PAUSED, GAME_STARTED, GAME_STOPED } from '../const.js'

const BOARD_WIDTH = 5
const BOARD_HEIGHT = 14
const LS_BEST_SCORE_NAME = 'best-score'
const SHAPE_INIT_POS = { top: 2, left: (BOARD_WIDTH / 2) | 0 }

export class GameModel {
  constructor(localStorage) {
    this.bestScore = localStorage.getItem(LS_BEST_SCORE_NAME) ?? 0
    this.board = new Board(BOARD_WIDTH, BOARD_HEIGHT)
    this.state = GAME_STOPED
    this.shape = null
    this.nextShape = null
    this.levelTick = null
    this.level = null
    this.score = null
    this.timer = null
  }

  start = () => {
    this.state = GAME_STARTED
    this.board.reset()
    this.shape = new Shape(getRandomShape(), getRandomShapeRotation())
    this.shape.position = { ...SHAPE_INIT_POS }
    this.nextShape = [getRandomShape(), getRandomShapeRotation()]
    this.levelTick = 0
    this.level = 1
    this.score = 0
    this.timer = this.addTimer()
  }

  resume = () => {
    this.state = GAME_STARTED
    this.timer = this.addTimer()
  }

  pause = () => {
    this.removerTimer(this.timer)
    this.state = GAME_PAUSED
  }

  finish = () => {
    this.removerTimer(this.timer)
    this.state = GAME_STOPED
    this.setBestScore()
  }

  reset = () => {
    this.removerTimer(this.timer)
    this.state = GAME_STOPED
    this.board.reset()
    this.shape = null
    this.nextShape = null
    this.level = 1
    this.score = 0
  }

  addTimer = () => {
    this.timer = setTimeout(this.timerHandler, this.levelTick)
  }

  removerTimer = () => {
    clearTimeout(this.timer)
  }

  timerHandler = () => {
    if (this.board.isOverflown()) {
      this.finish()
    } else {
      if (this.board.canMoveDown(this.shape)) {
        this.shape.moveDown()
        this.addTimer()
      } else {
        this.board.merge(this.shape)
        const removedRows = this.board.removeFullRows()
        const hasRemovedRows = Boolean(removedRows.length)
        if (hasRemovedRows) {
          this.score += removedRows.length
        }
        this.shape = new Shape(this.nextShape[0], this.nextShape[1])
        this.shape.position = { ...SHAPE_INIT_POS }
        this.nextShape = [getRandomShape(), getRandomShapeRotation()]
        this.addTimer()
      }
    }
  }

  setBestScore = () => {
    if (this.score > this.bestScore) {
      this.bestScore = this.score
      localStorage.setItem(LS_BEST_SCORE_NAME, this.bestScore)
    }
  }
}
