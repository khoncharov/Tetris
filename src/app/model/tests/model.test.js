import { GameModel } from '../model.js'

console.time('Test time')

/* LS for testing in nodejs */

const localStorage = {
  'best-score': null,
  getItem: function (name) {
    return this[name]
  },
  setItem: function (name, value) {
    this[name] = value
  },
}

/* +++ */

const game = new GameModel(localStorage)

game.reset()
game.start()
game.pause()
game.resume()
game.finish()

/* Test result */

console.log(`Model tests - \x1b[1;36mDONE\x1b[0m`)
console.timeEnd('Test time')
