import {
  GAME_PAUSED,
  GAME_STARTED,
  KEY_MOVE_DOWN,
  KEY_MOVE_LEFT,
  KEY_MOVE_RIGHT,
  KEY_ROTATE,
} from './const.js'
import { gameModel } from './model/model.js'
import { gameView } from './view/view.js'

class App {
  constructor(gameModel, gameView) {
    this.game = gameModel
    this.view = gameView
  }

  init = () => {
    document.querySelector('#btn-start').addEventListener('click', this.startBtnHandler)
    document.querySelector('#btn-reset').addEventListener('click', this.resetBtnHandler)
    document.addEventListener('keyup', this.rotationHandler)
    document.addEventListener('keypress', this.movementHandler)
  }

  startBtnHandler = () => {
    if (this.game.state === GAME_STARTED) {
      this.game.pause()
    } else {
      this.game.start()
    }
  }

  resetBtnHandler = () => {
    if (this.game.state === GAME_STARTED || this.game.state === GAME_PAUSED) {
      this.game.reset()
    }
  }

  rotationHandler = (e) => {
    const key = e.code
    if (this.game.state === GAME_STARTED) {
      if (key === KEY_ROTATE) {
        const canRotate = this.game.board.canShapeRotate(this.game.shape)
        if (canRotate) {
          this.game.shape.rotate()
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
          }
          break
        case KEY_MOVE_RIGHT:
          const canMoveRight = this.game.board.canMoveRight(this.game.shape)
          if (canMoveRight) {
            this.game.shape.moveRight()
          }
          break
        case KEY_MOVE_DOWN:
          const canMoveDown = this.game.board.canMoveDown(this.game.shape)
          if (canMoveDown) {
            this.game.shape.moveDown()
          }
          break
        default:
          break
      }
    }
  }
}

export const app = new App(gameModel, gameView)
