# Tetris

## About

Game "Tetris" as I understand it. Pet project for fun and practice.
The plan is to write prototype using html, css, js to develop and test game math and ui. Then expand it with webpack, scss, ts, react, jest, maybe nicer design and settings.

Prototype deploy: https://soft-salamander-46affc.netlify.app

## Todo

- Model

  - [x] - Develop game model and tests (nodejs)
  - [ ] - Add possibility for a shape to shift its position during rotation in horizontal opposite direction if there's no debris
  - [x] - Add game levels
  - [x] - :bug: ~~Shape can be merged if it appears at the place where it cann't move down~~

- View
  - [x] - Develop minimal game ui for desktop
  - [x] - Add popup with results
  - [ ] - Add animations (~~pause~~, appearance of a new shape, deletion of a full rows)
  - [ ] - Add settings
  - [ ] - Add sounds
  - [ ] - Add mobile version and responsive layout

## Notes:

- Shape.position is object like `{ top: i, left: j }`
  - `i ∈ [ 2 .. (BOARD_HEIGHT - 1) ]` - (2 - to fit i-shape with rotation 1, 3)
  - `j ∈ [ 0 .. (BOARD_WIDTH - 1) ]`
