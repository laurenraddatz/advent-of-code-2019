import { input as instructions } from './input'

const partOne = (input = 5) => {
  let values = instructions.split(',')

  let position = 0
  let output = ''

  while(parseInt(values[position]) !== 99) {
    const instruction = values[position].padStart(4, '0');
    const opcode = parseInt(instruction.slice(2))
    
    const mode1 = parseInt(instruction[1])
    const mode2 = parseInt(instruction[0])

    const a = values[values[position + 1]]
    const b = values[values[position + 2]]

    if (opcode === 1) { // sum
      const param1 = mode1 === 0 ? a : values[position + 1]
      const param2 = mode2 === 0 ? b : values[position + 2]
      values[values[position + 3]] = `${parseInt(param1) + parseInt(param2)}`
      position += 4
    } else if (opcode === 2) { // multiply
      const param1 = mode1 === 0 ? a : values[position + 1]
      const param2 = mode2 === 0 ? b : values[position + 2]
      values[values[position + 3]] = `${parseInt(param1) * parseInt(param2)}`
      position += 4
    } else if (opcode === 3) { // input
      values[values[position + 1]] = `${input}`
      position += 2
    } else if (opcode === 4) { // output
      output = mode1 === 0 ? a : values[position + 1]
      position += 2
    } 
    else if (opcode === 5 ) { // jump if not zero (true)
      const param1 = mode1 === 0 ? a : values[position + 1]
      const param2 = mode2 === 0 ? b : values[position + 2]
      if (parseInt(param1) !== 0) {
        position = parseInt(param2)
      } else {
        position += 3
      }
    } else if (opcode === 6 ) { // jump if zero (false)
      const param1 = mode1 === 0 ? a : values[position + 1]
      const param2 = mode2 === 0 ? b : values[position + 2]
      if (parseInt(param1) === 0) {
        position = parseInt(param2)
      } else {
        position += 3
      }
    } else if (opcode === 7 ) { // jump if less
      const param1 = mode1 === 0 ? a : values[position + 1]
      const param2 = mode2 === 0 ? b : values[position + 2]
      if (parseInt(param1) < parseInt(param2)) {
        values[values[position + 3]] = 1
      } else {
        values[values[position + 3]] = 0
      }
      position += 4
    } else if (opcode === 8 ) { // jump if equal
      const param1 = mode1 === 0 ? a : values[position + 1]
      const param2 = mode2 === 0 ? b : values[position + 2]
      if (parseInt(param1) === parseInt(param2)) {
        values[values[position + 3]] = 1
      } else {
        values[values[position + 3]] = 0
      }
      position += 4
    }
    else {
      console.log('oh no', opcode, position)
      break
    }
  }
  return output
}

console.log('part one: ', partOne(1))
console.log('part two: ', partOne(5))