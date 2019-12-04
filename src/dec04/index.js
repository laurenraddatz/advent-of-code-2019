import { input } from './input'

const getNumberOfValidPasswords = (version) => {
  const [min, max] = input.split('-').map(Number)

  let count = 0
  for (let i = min; i <= max; i++) {
    if (version === 1 ? isValidPartOne(`${i}`) : isValidPartTwo(`${i}`)) {
      count++
    }
  }
  return count
}

const isValidPartOne = (password) => {
  let increasing = true
  let doubles = false

  for (let i = 0; i < password.length; i++) {
    const curr = parseInt(password[i])
    const next = parseInt(password[i + 1])

    if (curr > next) {
      increasing = false
    }
    if (curr === next) {
      doubles = true
    }
  }
  return increasing && doubles
}

////////////// part two

const isValidPartTwo = (password) => {
  let increasing = true
  let doubles = false

  for (let i = 0; i < password.length; i++) {
    const prev = parseInt(password[i - 1])
    const curr = parseInt(password[i])
    const next = parseInt(password[i + 1])
    const nextnext = parseInt(password[i + 2])

    if (curr > next) {
      increasing = false
    }
    if (prev !== curr && curr === next && curr !== nextnext) {
      doubles = true
    }
  }
  return increasing && doubles
}

console.log('part one: ', getNumberOfValidPasswords(1))
console.log('part two: ', getNumberOfValidPasswords(2))
