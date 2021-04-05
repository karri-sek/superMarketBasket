import { removeBasketItem, getSubTotal } from './index'
describe('Utils', () => {
    describe('removeBasketItem', () => {
        test('should return the empty array after removing the found out element', () => {
            const inputArray = [{ id: 1, name: 'face masks', price: 12.5 }]
            const product = { id: 1, name: 'face masks', price: 12.5 }
            expect(removeBasketItem(inputArray, product)).toEqual([])
        })
        test('should return the remain array after removing the found out element', () => {
            const inputArray = [
                { id: 1, name: 'face masks', price: 12.5 },
                { id: 2, name: 'HandSanitizer', price: 15.5 },
            ]
            const product = { id: 1, name: 'face masks', price: 12.5 }
            expect(removeBasketItem(inputArray, product)).toEqual([
                { id: 2, name: 'HandSanitizer', price: 15.5 },
            ])
        })

        test('if no product element found by id the input array should be returned', () => {
            const inputArray = [
                { id: 1, name: 'face masks', price: 12.5 },
                { id: 2, name: 'HandSanitizer', price: 15.5 },
            ]
            const product = { id: 3, name: 'face masks', price: 12.5 }
            expect(removeBasketItem(inputArray, product)).toEqual(inputArray)
        })
        test('should remove only one element from the array after finding that element by id', () => {
            const inputArray = [
                { id: 1, name: 'face masks', price: 12.5 },
                { id: 2, name: 'HandSanitizer', price: 15.5 },
                { id: 1, name: 'face masks', price: 12.5 },
            ]
            const product = { id: 1, name: 'face masks', price: 12.5 }
            expect(removeBasketItem(inputArray, product)).toEqual([
                { id: 2, name: 'HandSanitizer', price: 15.5 },
                { id: 1, name: 'face masks', price: 12.5 },
            ])
        })
    })
    describe('getSubTotal', () => {
        test('given array of basket Items should return sub total of all the products', () => {
            const basketItems = [
                { id: 1, name: 'face masks', price: 10.5 },
                { id: 2, name: 'HandSanitizer', price: 10.5 },
            ]
            expect(getSubTotal(basketItems)).toEqual(21)
        })
    })
})
