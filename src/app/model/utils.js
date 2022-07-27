export const createMatrix = (width, height, value = 0) => {
  const result = []
  for (let i = 0; i < height; i += 1) {
    result.push([])
    for (let j = 0; j < width; j += 1) {
      result[i].push(value)
    }
  }
  return result
}
