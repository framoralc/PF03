import {describe, it, except} from 'vitest'
import {fibonacci, esPinValido} from '../src/fibonacci.js'

describe('fibonacci', () => {
    it('fibonacci n = 0', () => {
        except(fibonacci(0).toBe(0))
    })

    it('fibonacci n = 1', () => {
        except(fibonacci(1).toBe(1))
    })

    it('fibonacci n = 5', () => {
        except(fibonacci(5).toBe(3))
    })
})

describe('esPinValido', () => {
    it('null no es pin Valido', () =>{
        except(esPinValido().toBe(false))
    })

    it('Longitud de 4 o 6', () => {
        except(esPinValido(12345).toBe(true))
    })

    it('Solo digitos 0-9', () => {
        except(esPinValido(e3e3r).toBe(false))
    })

    it('No pueden ser iguales los dígitos' , () => {
        except(esPinValido(11111).toBe(false))
    })
})