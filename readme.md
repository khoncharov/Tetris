# Tetris

## About

## Todo

- Model

  - [x] - Develop game model and tests (nodejs)
  - [ ] - Add possibility for a shape to shift its position during rotation in horizontal opposite direction if there's no debris
  - [ ] - Add game levels

- View
  - [x] - Develop minimal game ui for desktop
  - [ ] - Add popup with results
  - [ ] - Add animations (pause, appearance of a new shape, deletion of a full rows)
  - [ ] - Add settings
  - [ ] - Add sounds
  - [ ] - Add mobile version and responsive layout

## Notes:

- Shape.position is object like `{ top: i, left: j }`
  - `i ∈ [ 2 .. (BOARD_HEIGHT - 1) ]` - (2 - to fit i-shape with rotation 1, 3)
  - `j ∈ [ 0 .. (BOARD_WIDTH - 1) ]`
