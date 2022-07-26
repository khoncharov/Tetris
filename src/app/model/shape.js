import { BOARD_WIDTH } from './const.js'
import { shapeType } from './shape-const.js'

export class Shape {
  constructor() {
    this.position = { top: 0, left: (BOARD_WIDTH / 2) | 0 }
    this.rotation = Math.floor(Math.random() * 4)
    this.type = shapeType.get(Math.floor(Math.random() * shapeType.size))
  }

  moveDown = () => {
    this.position.top += 1
  }

  moveLeft = () => {
    if (this.position.left > 0) {
      this.position.left -= 1
    }
  }

  moveRight = () => {
    if (this.position.left < BOARD_WIDTH) {
      this.position.left += 1
    }
  }

  rotate = () => {
    console.log('Shape rotation is not implemented')
  }
}
