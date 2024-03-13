import {calcular} from '../src/calc.js'

describe ('calc', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(calc.add(1, 2)).toBe(3)
    })
})