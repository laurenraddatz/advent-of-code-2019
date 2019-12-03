import { input1, input2 } from './input'

const wire1 = input1.split(',')
const wire2 = input2.split(',') 

const getPath = (wire) => {
  const points = new Set()
  points.add('0, 0')
  const position = {x: 0, y: 0}

  for (let i = 0; i < wire.length; i++) {
    const val = [...wire[i]]
  
    const distance = parseInt(val.splice(1).join(''))
    const direction = val.toString()

    switch (direction) {
      case 'R': {
        for (let j = 1; j <= distance; j++) {
          let idx = position.x + j + ',' + position.y
          points.add(idx)
        }
        position.x += distance
        break
      }
      case 'L': {
        for (let j = 1; j <= distance; j++) {
          let idx = position.x - j + ',' + position.y
          points.add(idx)
        }
        position.x -= distance
        break
      }
      case 'D': {
        for (let j = 1; j <= distance; j++) {
          let idx = position.x + ',' + (position.y - j)
          points.add(idx)
        }
        position.y -= distance
        break
      }
      case 'U': {
        for (let j = 1; j <= distance; j++) {
          let idx = position.x + ',' + (position.y + j)
          points.add(idx)
        }
        position.y += distance
        break
      }
    }
  }

  return points
}

/////////////////////////////////

const getPositions = (wire) => {
  const points = new Map()
  const position = {x: 0, y: 0}
  let length = 0

  for (let i = 0; i < wire.length; i++) {
    const val = [...wire[i]]
  
    const distance = parseInt(val.splice(1).join(''))
    const direction = val.toString()

    switch (direction) {
      case 'R': {
        for (let j = 1; j <= distance; j++) {
          let idx = position.x + j + ',' + position.y
          points.set(idx, ++length)
        }
        position.x += distance
        break
      }
      case 'L': {
        for (let j = 1; j <= distance; j++) {
          let idx = position.x - j + ',' + position.y
          points.set(idx, ++length)
        }
        position.x -= distance
        break
      }
      case 'D': {
        for (let j = 1; j <= distance; j++) {
          let idx = position.x + ',' + (position.y - j)
          points.set(idx, ++length)
        }
        position.y -= distance
        break
      }
      case 'U': {
        for (let j = 1; j <= distance; j++) {
          let idx = position.x + ',' + (position.y + j)
          points.set(idx, ++length)
        }
        position.y += distance
        break
      }
    }
  }

  return points
}

const wire1Path = getPath(wire1)
const wire2Path = [...getPath(wire2)]

const partOne = wire2Path
  .filter((position) => wire1Path.has(position)).slice(1)
  .map((position) => position.split(',').map(Number))
  .map(([x, y]) => Math.abs(x) + Math.abs(y))
  .sort((a, b) => a - b)[0]

const wire1Positions = getPositions(wire1)
const wire2Positions = [...getPositions(wire2).entries()]

const partTwo = wire2Positions
  .filter(([position]) => wire1Positions.has(position))
  .map(([position, count]) => wire1Positions.get(position) + count)
  .sort((a, b) => a - b)[0]

console.log('part one: ', partOne)
console.log('part two: ', partTwo)

