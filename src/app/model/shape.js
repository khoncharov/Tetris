import { shapeType } from './shape-types.js'
import { createMatrix } from './utils.js'

export class Shape {
  constructor(typeIndex, rotation) {
    const shape = shapeType.get(typeIndex)
    this.name = shape.name
    this.type = shape.matrix
    this.center = shape.centerPos
    this.rotation = rotation
    this.#setInitialShapeRotation(rotation)
    this.width = this.type[0].length
    this.height = this.type.length
    this.#position = null
  }

  #setInitialShapeRotation = (rotation) => {
    for (let i = 0; i < rotation; i += 1) {
      this.rotate()
    }
  }

  get position() {
    return this.#position
  }

  set position(value) {
    this
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
    this.rotation === 3 ? 0 : (this.rotation += 1)
  }
}
