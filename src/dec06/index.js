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
  const totalOrbits = Object.keys(orbitMap)
    .map(getOrbitCount)
    .reduce((total, curr) => total + curr, 0)

  return totalOrbits
}

console.log('part one: ', getOrbits())

const getDistance = () => {
  const orbits = input.split('\n')
  const orbitMap = {}

  orbits.map((orbit) => {
    const [a, b] = orbit.split(')')
    orbitMap[b] = a
  })

  const distances = {}
  let objects = Object.keys(orbitMap)

  objects.map((object, idx) => {
    const visited = []
    let next = orbitMap[object]
    let distance = 0
    
    while (next) {
      next = orbitMap[next]
      distance++

      visited.push([next, distance])
    }
    distances[object] = visited
  })

  const youClosestParent = distances['YOU']
    .filter(([object]) => distances['SAN'].find(([object2]) => object === object2))
    .sort((a, b) => a[1] - b[1])[0]

  const sanClosestParent = distances['SAN']
    .find(([object]) => object === youClosestParent[0])

  return youClosestParent[1] + sanClosestParent[1]
}

console.log('part two: ', getDistance())