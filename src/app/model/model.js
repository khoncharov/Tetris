import { Shape } from './shape.js'
import { Board } from './board.js'
import { getRandomShapeRotation, getRandomShape } from './shape-types.js'
import { GAME_PAUSED, GAME_STARTED, GAME_STOPED } from '../const.js'

const BOARD_WIDTH = 17
const BOARD_HEIGHT = 25
const LS_BEST_SCORE_NAME = 'best-score'
const SHAPE_INIT_POS = { top: 2, left: (BOARD_WIDTH / 2) | 0 }

export class GameModel {
  constructor(localStorage) {
    this.bestScore = localStorage.getItem(LS_BEST_SCORE_NAME) ?? 0
    this.board = new Board(BOARD_WIDTH, BOARD_HEIGHT)
    this.state = GAME_STOPED
    this.shape = null
    this.nextShape = null
    this.levelTick = 1000
    this.level = null
    this.score = null
  }

  getRandomShape = () => {
    return new Shape(getRandomShape(), getRandomShapeRotation())
  }

  changeShape = () => {
    this.shape = new Shape(this.nextShape.index, this.nextShape.rotation)
    this.shape.position = { ...SHAPE_INIT_POS }
    this.nextShape = getRandomShape()
  }

  start = () => {
    this.state = GAME_STARTED
    this.board.reset()
    this.shape = this.getRandomShape()
    this.shape.position = { ...SHAPE_INIT_POS }
    this.nextShape = this.getRandomShape()
    this.level = 1
    this.score = 0
  }

  resume = () => {
    this.state = GAME_STARTED
  }

  pause = () => {
    this.state = GAME_PAUSED
  }

  finish = () => {
    this.state = GAME_STOPED
    this.setBestScore()
  }

  reset = () => {
    this.state = GAME_STOPED
    this.board.reset()
    this.shape = null
    this.nextShape = null
    this.level = 1
    this.score = 0
  }

  setBestScore = () => {
    if (this.score > this.bestScore) {
      this.bestScore = this.score
      localStorage.setItem(LS_BEST_SCORE_NAME, this.bestScore)
    }
  }
}
