import assert from 'assert/strict'
import { GameModel } from '../model.js'
import { getRandomInteger } from '../utils.js'

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

/* Set level */

let g = new GameModel(localStorage)

g.start()
assert.strictEqual(g.level, 1)
assert.strictEqual(g.score, 0)
while (g.score < 500) {
  const points = getRandomInteger(4)
  g.score += points
  g.setLevel()
  if (g.score >= 0 && g.score < 10) {
    assert.strictEqual(g.level, 1)
    assert.strictEqual(g.levelTick, 1000)
  }
  if (g.score >= 70 && g.score < 80) {
    assert.strictEqual(g.level, 8)
    assert.strictEqual(g.levelTick, 200)
  }
  if (g.score >= 200 && g.score < 210) {
    assert.strictEqual(g.level, 21)
    assert.strictEqual(g.levelTick, 100)
  }
}

/* Test result */

console.log(`Model tests - \x1b[1;36mDONE\x1b[0m`)
console.timeEnd('Test time')
