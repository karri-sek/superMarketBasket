import { getItemQuantity } from './discountUtils'

describe('getItemQuantity', () => {
    test('given empty basketItems should return empty object', () => {
        const basketItems = []
        expect(getItemQuantity(basketItems)).toEqual({})
    })
    test('given basketItems should return object contains productID and quantity', () => {
        const basketItems = [
            { id: 1, name: 'face masks', price: 10.5 },
            { id: 1, name: 'face masks', price: 10.5 },
            { id: 2, name: 'HandSanitizer', price: 10.5 },
            { id: 2, name: 'HandSanitizer', price: 10.5 },
            { id: 1, name: 'face masks', price: 10.5 },
            { id: 1, name: 'face masks', price: 10.5 },
        ]
        const expectedObj = { 1: 4, 2: 2 }
        expect(getItemQuantity(basketItems)).toEqual(expectedObj)
    })

    test('given two items basketItems array should return quantity obj', () => {
        const basketItems = [
            { id: 1, name: 'face masks', price: 10.5 },
            { id: 2, name: 'HandSanitizer', price: 10.5 },
        ]
        const expectedObj = { 1: 1, 2: 1 }
        expect(getItemQuantity(basketItems)).toEqual(expectedObj)
    })
})
