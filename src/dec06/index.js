import { input } from './input'

const getOrbits = () => {
  const orbits = input.split('\n')
  const orbitMap = {}

  orbits.map((orbit) => {
    const [a, b] = orbit.split(')')
    orbitMap[b] = a
  })

  const orbitCount = {}
  const getOrbitCount = (satellite) => {
    if (satellite in orbitCount) {
      return orbitCount[satellite]
    } else if (satellite in orbitMap) {
      const counter = 1 + getOrbitCount(orbitMap[satellite])
      orbitCount [satellite] = counter
      return counter
    } else {
      return 0
    }
  }
  const getTotalOrbits = Object.keys(orbitMap)
    .map(getOrbitCount)
    .reduce((total, curr) => total + curr, 0)

  return getTotalOrbits
}

console.log('part one: ', getOrbits())