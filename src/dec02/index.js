import { input } from './input'

const partOne = (replacement1, replacement2) => {
  const values = input.slice()

  values[1] = replacement1
  values[2] = replacement2

  let position = 0

  while(values[position] !== 99) {
    const a = values[values[position + 1]]
    const b = values[values[position + 2]]

    const outPosition = values[position + 3]
    const out = values[position] === 1 ? a + b : a * b

    values[outPosition] = out
    position += 4
  }

  return values[0]
}

const partTwo = (value) => {
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      const result = partOne(noun, verb)
      
      if (result === value) {
        return noun * 100 + verb
      }
    }
  }
}

console.log('part one: ', partOne(12, 2))
console.log('part two: ', partTwo(19690720))