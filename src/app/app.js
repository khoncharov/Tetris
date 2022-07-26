import { KEY_MOVE_DOWN, KEY_MOVE_LEFT, KEY_MOVE_RIGHT, KEY_ROTATE } from './const.js'
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
    if (this.game.isStarted) {
      this.game.pause()
      this.view.update()
    } else {
      this.game.start()
      this.view.update()
    }
  }

  resetBtnHandler = () => {
    this.game.reset()
    this.view.update()
  }

  rotationHandler = (e) => {
    const key = e.code
    if (this.game.isStarted && this.game.currShape) {
      if (key === KEY_ROTATE) {
        this.game.currShape.rotate()
      }
    }
  }

  movementHandler = (e) => {
    const key = e.code
    if (this.game.isStarted && this.game.currShape) {
      switch (key) {
        case KEY_MOVE_LEFT:
          this.game.currShape.moveLeft()
          // console.log(this.game.currShape.position)
          break
        case KEY_MOVE_RIGHT:
          this.game.currShape.moveRight()
          // console.log(this.game.currShape.position)
          // update shape view
          break
        case KEY_MOVE_DOWN:
          // check for collision
          this.game.currShape.moveDown()
          // console.log(this.game.currShape.position)
          // update shape view
          break
        default:
          break
      }
    }
  }
}

export const app = new App(gameModel, gameView)
