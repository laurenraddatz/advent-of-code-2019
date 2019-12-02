import { modules } from './input'

const getFuel = (module) => (
  Math.floor(module / 3 - 2)
)

const getTotalFuel = (module) => {
  const fuel = getFuel(module)
  return fuel > 0 ? fuel + getTotalFuel(fuel) : 0
}

const sum = (a, b) => a + b

console.log('part one: ' + modules.map(getFuel).reduce(sum))
console.log('part two: ' + modules.map(getTotalFuel).reduce(sum))
