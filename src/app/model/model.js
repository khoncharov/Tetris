import { Shape } from './shape.js'
import { board } from './board.js'
import { getRandomShapeRotation, getRandomShapeType } from './shape-types.js'
import { GAME_PAUSED, GAME_STARTED, GAME_STOPED } from '../const.js'

const LS_BEST_SCORE_NAME = 'best-score'

class GameModel {
  constructor() {
    this.bestScore = localStorage.getItem(LS_BEST_SCORE_NAME) ?? 0
    this.board = board
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
    this.shape = new Shape(getRandomShapeType(), getRandomShapeRotation())
    this.nextShape = new Shape(getRandomShapeType(), getRandomShapeRotation())
    this.levelTick = 1000
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
      if (this.board.canShapeMoveDown(this.shape)) {
        this.shape.moveDown()
      } else {
        this.board.merge(this.shape)
        const removedRows = this.board.removeFullRows()
        const hasRemovedRows = removedRows.length
        if (hasRemovedRows) {
          this.score += removedRows.length
        }
        this.shape = this.nextShape
        this.nextShape = new Shape(getRandomShapeType(), getRandomShapeRotation())
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

export const gameModel = new GameModel()
