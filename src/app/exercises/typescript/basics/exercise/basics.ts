// tslint:disable
const foo: string = 'foo'
const bar: number = 1
const baz: boolean = true
const qux: string[] = ['bar', 'baz', 'qux']

const n: null = null

let a: null
a = null

const b: null | string = Math.random() > 0.5 ? null : 'bar'
// OK: b = null

if (b !== null) {
  const l = b.length
  console.log(l)
}

function sum(a: number, b: number = 1): number {
  return a + b
}

const result = sum(2).toFixed(4)
console.log(result)

const subtract = (a: number, b: number = 1): number => a + b
const result2 = subtract(3)
console.log(result2)

function concatenate(a: string, b: string): string {
  if (b !== null) {
    return a.concat(b)
  }

  return a
}

const x = concatenate('Hello', null)
const y = concatenate('Hello ', 'world')

// Objects

type
const people: any[] = [
  { age: 42, name: 'Sonia', job: 'Autentia', pet: undefined },
  { age: 32, name: 'Paul', pet: 'lizard' },
]
const ages = people.reduce((a, b) => a + b.age, 0)
console.log(ages)

type Cat = any

const cat: Cat = {
  age: 1,
  name: 'Tobby',
  favouriteToy: 'Ball',
}

function getNameOfCat(cat: any): any {
  return cat.name
}

getNameOfCat(cat)

export {}
