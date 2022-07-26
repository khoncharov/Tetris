import { Shape } from './shape.js'
import { board } from './board/board.js'

class GameModel {
  constructor(board) {
    this.board = board
    this.currShape = null
    this.nextShape = null
    this.level = 1
    this.levelTick = 100
    this.score = 0
    this.bestScore = localStorage.getItem('best-score') ?? 0
    this.isStarted = false
    this.timer = null
  }

  start = () => {
    this.isStarted = true
    this.currShape = new Shape()
    this.nextShape = new Shape()
    this.timer = this.addTimer()
  }

  pause = () => {
    this.removerTimer(this.timer)
    this.isStarted = false
  }

  reset = () => {
    this.removerTimer(this.timer)
    this.isStarted = false
    this.board.reset()
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
    const isCollided = this.checkForCollisions()
    if (isCollided) {
      this.board.merge(this.currShape)
      this.currShape = this.nextShape
      this.nextShape = new Shape()
    } else {
      this.currShape.position.top += 1
    }
    console.log(this.currShape.position)
    this.addTimer()
  }

  checkForCollisions = () => {
    const f = this.currShape
    const condition1 = f.position.top === 4
    const condition2 = false
    return condition1 || condition2
  }
}

export const gameModel = new GameModel(board)
