import {
  GAME_PAUSED,
  GAME_STARTED,
  KEY_MOVE_DOWN,
  KEY_MOVE_LEFT,
  KEY_MOVE_RIGHT,
  KEY_ROTATE,
} from './const.js'
import { GameModel } from './model/model.js'
import { GameView } from './view/view.js'

class GameController {
  constructor(gameModel, gameView) {
    this.game = gameModel
    this.view = gameView
    this.timer = null
  }

  init = () => {
    document.querySelector('#btn-start').addEventListener('click', this.startBtnHandler)
    document.querySelector('#btn-reset').addEventListener('click', this.resetBtnHandler)
    document.addEventListener('keyup', this.rotationHandler)
    document.addEventListener('keypress', this.movementHandler)
  }

  startBtnHandler = () => {
    if (this.game.state === GAME_STARTED) {
      this.removerTimer(this.timer)
      this.game.pause()
      this.view.startBtn.textContent = 'Resume'
    } else if (this.game.state === GAME_PAUSED) {
      this.game.resume()
      this.timer = this.addTimer()
      this.view.startBtn.textContent = 'Pause'
    } else {
      this.game.start()
      this.timer = this.addTimer()
      this.view.startBtn.textContent = 'Pause'
      this.view.updateShape()
      this.view.updateShapePosition()
      this.view.updateNextShape()
      this.view.updateBoard()
    }
  }

  resetBtnHandler = () => {
    if (this.game.state === GAME_STARTED || this.game.state === GAME_PAUSED) {
      this.removerTimer(this.timer)
      this.game.reset()
      this.view.startBtn.textContent = 'Start'
      this.view.updateBoard()
    }
  }

  rotationHandler = (e) => {
    const key = e.code
    if (this.game.state === GAME_STARTED) {
      if (key === KEY_ROTATE) {
        const canRotate = this.game.board.canRotate(this.game.shape)
        if (canRotate) {
          this.game.shape.rotate()
          this.view.updateShape()
          this.view.updateShapePosition()
        }
      }
    }
  }

  movementHandler = (e) => {
    const key = e.code
    if (this.game.state === GAME_STARTED) {
      switch (key) {
        case KEY_MOVE_LEFT:
          const canMoveLeft = this.game.board.canMoveLeft(this.game.shape)
          if (canMoveLeft) {
            this.game.shape.moveLeft()
            this.view.updateShapePosition()
          }
          break
        case KEY_MOVE_RIGHT:
          const canMoveRight = this.game.board.canMoveRight(this.game.shape)
          if (canMoveRight) {
            this.game.shape.moveRight()
            this.view.updateShapePosition()
          }
          break
        case KEY_MOVE_DOWN:
          const canMoveDown = this.game.board.canMoveDown(this.game.shape)
          if (canMoveDown) {
            this.game.shape.moveDown()
            this.view.updateShapePosition()
          }
          break
        default:
          break
      }
    }
  }

  addTimer = () => {
    this.timer = setTimeout(this.gameTimerHandler, this.game.levelTick)
  }

  removerTimer = () => {
    clearTimeout(this.timer)
  }

  gameTimerHandler = () => {
    if (this.game.board.isOverflown()) {
      this.removerTimer()
      this.game.finish()
      this.view.startBtn.textContent = 'Start'
    } else {
      if (this.game.board.canMoveDown(this.game.shape)) {
        this.game.shape.moveDown()
        this.view.updateShapePosition()
        this.addTimer()
      } else {
        this.game.board.merge(this.game.shape)
        const removedRows = this.game.board.removeFullRows()
        const hasRemovedRows = Boolean(removedRows.length)
        if (hasRemovedRows) {
          this.game.score += removedRows.length
        }
        this.game.changeShape()
        this.view.updateShape()
        this.view.updateShapePosition()
        this.view.updateNextShape()
        this.view.updateBoard()
        this.addTimer()
      }
    }
  }
}

const gameModel = new GameModel(localStorage)
const gameView = new GameView(gameModel)
export const controller = new GameController(gameModel, gameView)
