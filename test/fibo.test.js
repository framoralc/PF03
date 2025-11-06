import {describe, it, expect} from 'vitest'
import {fibonacci, esPinValido} from '../src/fibonacci.js'

describe('fibonacci', () => {
    it('fibonacci n = 0', () => {
        expect(fibonacci(0)).toBe(0)
    })

    it('fibonacci n = 1', () => {
        expect(fibonacci(1)).toBe(1)
    })

    it('fibonacci n = 5', () => {
        expect(fibonacci(5)).toBe(5)
    })
})

describe('esPinValido', () => {
    it('null no es pin Valido', () =>{
        expect(esPinValido()).toBe(false)
    })

    it('Longitud de 4 a 6', () => {
        expect(esPinValido('12345')).toBe(true)
    })

    it('Solo digitos 0-9', () => {
        expect(esPinValido('e3e3r')).toBe(false)
    })

    it('No pueden ser iguales los dígitos' , () => {
        expect(esPinValido('11111')).toBe(false)
    })
})