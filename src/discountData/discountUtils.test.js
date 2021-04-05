import {
    getItemQuantity,
    getDiscountObj,
    qualifiedForDiscount,
    createSavingObjects,
    getSavings,
} from './discountUtils'

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
    test('when the productID not matches to discount object product Id then should returns discountObject', () => {
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
    test('when the productID not matched to any discount object should return undefined', () => {
        expect(getDiscountObj(5)).toBeUndefined()
    })
})
describe('qualifiedForDiscount', () => {
    test('default values should return false', () => {
        expect(qualifiedForDiscount()).toBeFalsy()
    })
    test('when the purchase quantity of a product qualifies to the discount should return true', () => {
        expect(qualifiedForDiscount(4, 2)).toBeTruthy()
    })
    test('when the purchase quantity of a product not qualifies to the discount should return false', () => {
        expect(qualifiedForDiscount(4, 6)).toBeFalsy()
    })
})

describe('createSavingObjects', () => {
    test('passing discountQuantity and discount object should return array of saving object', () => {
        const discountItem = {
            discountValue: 1.0,
            description: 'Face Masks 2 for £4',
        }
        const expectedObject = [
            { description: 'Face Masks 2 for £4', value: 1 },
            { description: 'Face Masks 2 for £4', value: 1 },
        ]
        expect(createSavingObjects(2, discountItem)).toEqual(expectedObject)
    })

    test('passing discountQuantity as zero value should return empty array of saving objects', () => {
        const discountItem = {
            discountValue: 1.0,
            description: 'Face Masks 2 for £4',
        }
        expect(createSavingObjects(0, discountItem)).toEqual([])
    })
})

describe('getSavings', () => {
    test('given item quantity object should return saving objects array by looking at discounts', () => {
        const productIdQuantityObject = { 1: 4 }
        const expectedObject = [
            { description: 'Face Masks 2 for £4', value: 1 },
            { description: 'Face Masks 2 for £4', value: 1 },
        ]
        expect(getSavings(productIdQuantityObject)).toEqual(expectedObject)
    })

    test('when the purchase quantity in multiples of 6 to the toilet paper should return 0.65 discount value', () => {
        const productIdQuantityObject = { 2: 6 }
        const expectedObject = [
            { description: 'Toilet Paper 6 for 5', value: 0.65 },
        ]
        expect(getSavings(productIdQuantityObject)).toEqual(expectedObject)
    })
    test('when the purchase quantity(12) in multiples of 6 to the toilet paper should return  two saving objects', () => {
        const productIdQuantityObject = { 2: 12 }
        const expectedObject = [
            { description: 'Toilet Paper 6 for 5', value: 0.65 },
            { description: 'Toilet Paper 6 for 5', value: 0.65 },
        ]
        expect(getSavings(productIdQuantityObject)).toEqual(expectedObject)
    })
})
