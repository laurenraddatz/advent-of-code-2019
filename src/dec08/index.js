import { readFileSync } from 'fs' 

const input = readFileSync('src/dec08/input.txt').toString()
const data = input.split('').map(Number)
const width = 25
const height = 6

const layers = []

for (let x = 0; x < input.length; x += width * height) {
  layers.push(data.slice(x, x + width * height))
}

const fewestZeros = layers.map((layer) => (
  {
    zeros: layer.filter((bit) => bit === 0).length,
    ones: layer.filter((bit) => bit === 1).length,
    twos: layer.filter((bit) => bit === 2).length,
  }
)).sort((a, b) => a.zeros - b.zeros)

console.log('part one: ', fewestZeros[0].ones * fewestZeros[0].twos)