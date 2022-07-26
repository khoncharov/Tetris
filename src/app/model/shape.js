import { BOARD_WIDTH } from './board.js'
import { shapeType } from './shape-types.js'

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
    this.position.left -= 1
  }

  moveRight = () => {
    this.position.left += 1
  }

  rotate = () => {
    console.log('Shape rotation is not implemented')
  }
}
