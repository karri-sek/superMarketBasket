import { getItemQuantity, getDiscountObj } from './discountUtils'

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

describe('getDiscountObj', () => {
    test('when the productID not matches to discount object product Id then should returns false', () => {
        const expectedDiscountObj = {
            discountId: 1,
            discountProductId: 1,
            discountType: 'fixed',
            multiplesOf: 2,
            discountValue: 1.0,
            priceOf: null,
            description: 'Face Masks 2 for £4',
        }
        expect(getDiscountObj(1)).toEqual(expectedDiscountObj)
    })
    test('when the productID matches to discount object productId, should return true', () => {
        expect(getDiscountObj(5)).toBeUndefined()
    })
})
