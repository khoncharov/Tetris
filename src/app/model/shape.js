import { shapeType } from './shape-types.js'
import { createMatrix } from './utils.js'

export class Shape {
  constructor(typeIndex, rotation) {
    const shape = shapeType.get(typeIndex)
    this.name = shape.name
    this.type = shape.matrix
    this.width = this.type[0].length
    this.height = this.type.length
    this.rotation = 0
    this.centerPos = shape.centerPos
    this.#setInitialShapeRotation(rotation)
    this.position = null
  }

  #setInitialShapeRotation = (rotation) => {
    for (let i = 0; i < rotation; i += 1) {
      this.rotate()
    }
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
    const destWidth = this.height
    const destHeight = this.width
    const dest = createMatrix(destWidth, destHeight)
    this.type.forEach((row, i) => {
      row.forEach((value, j) => {
        dest[j][i] = value
      })
    })
    dest.forEach((row) => row.reverse())
    this.type = dest
    this.width = destWidth
    this.height = destHeight
    this.rotation === 3 ? (this.rotation = 0) : (this.rotation += 1)
  }
}
