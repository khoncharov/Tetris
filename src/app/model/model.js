import { Shape } from './shape.js'
import { Board } from './board.js'
import { getRandomShapeRotation, getRandomShape } from './shape-types.js'
import {
  GAME_PAUSED,
  GAME_STARTED,
  GAME_STOPED,
  INIT_BESTSCORE,
  INIT_LEVEL,
  INIT_SCORE,
} from '../const.js'

const BOARD_WIDTH = 15
const BOARD_HEIGHT = 25
const LS_BEST_SCORE_NAME = 'best-score'
const SHAPE_INIT_POS = { top: 2, left: (BOARD_WIDTH / 2) | 0 }
const gameTimeout = [1000, 800, 600, 500, 400, 300, 250, 200, 150, 100]
const LINES_PRE_LEVEL = 10

export class GameModel {
  constructor(localStorage) {
    this.board = new Board(BOARD_WIDTH, BOARD_HEIGHT)
    this.state = GAME_STOPED
    this.shape = null
    this.nextShape = null
    this.levelTick = null
    this.level = null
    this.score = null
    this.bestScore = localStorage.getItem(LS_BEST_SCORE_NAME) ?? INIT_BESTSCORE
  }

  getRandomShape = () => {
    return new Shape(getRandomShape(), getRandomShapeRotation())
  }

  changeShape = () => {
    this.shape = new Shape(this.nextShape.index, this.nextShape.rotation)
    this.shape.position = { ...SHAPE_INIT_POS }
    this.nextShape = this.getRandomShape()
  }

  start = () => {
    this.state = GAME_STARTED
    this.board.reset()
    this.shape = this.getRandomShape()
    this.shape.position = { ...SHAPE_INIT_POS }
    this.nextShape = this.getRandomShape()
    this.level = INIT_LEVEL
    this.score = INIT_SCORE
    this.setLevel()
  }

  resume = () => {
    this.state = GAME_STARTED
  }

  pause = () => {
    this.state = GAME_PAUSED
  }

  finish = () => {
    this.state = GAME_STOPED
    this.#setBestScore()
  }

  reset = () => {
    this.state = GAME_STOPED
    this.board.reset()
    this.shape = null
    this.nextShape = null
    this.level = INIT_LEVEL
    this.score = INIT_SCORE
  }

  #setBestScore = () => {
    if (this.score > this.bestScore) {
      this.bestScore = this.score
      localStorage.setItem(LS_BEST_SCORE_NAME, this.bestScore)
    }
  }

  setLevel = () => {
    const levelCondition = this.score % LINES_PRE_LEVEL === 0
    if (levelCondition) {
      this.level += 1
      gameTimeout[this.level - 1]
        ? (this.levelTick = gameTimeout[this.level - 1])
        : (this.levelTick = gameTimeout[gameTimeout.length - 1])
    }
  }
}
