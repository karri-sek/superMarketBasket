import {
    removeBasketItem,
    getSubTotal,
    isEmpty,
    getTotalSavingsValue,
    getTotalToPayValue,
} from './index'
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
    describe('getTotalToPayValue', () => {
        test('given sub total and total savings value should give total to pay', () => {
            expect(getTotalToPayValue(14.5, 4.5)).toEqual(10)
        })
    })
    describe('getTotalSavingsValue', () => {
        test('given savings array should return total saving value', () => {
            const savings = [
                { description: 'Face Masks 2 for £4', value: 1 },
                { description: 'Face Masks 2 for £4', value: 1 },
            ]
            expect(getTotalSavingsValue(savings)).toEqual(2)
        })
        test('given savings array should return total saving value', () => {
            const savings = [
                { description: 'Toilet Paper 6 for 5', value: 0.65 },
                { description: 'Toilet Paper 6 for 5', value: 0.65 },
            ]
            expect(getTotalSavingsValue(savings)).toEqual(1.3)
        })
    })
    describe('isEmpty', () => {
        it('should return TRUE if NULL is passed', () => {
            expect(isEmpty(null)).toBeTruthy()
        })

        it('should return TRUE if UNDEFINED is passed', () => {
            expect(isEmpty(undefined)).toBeTruthy()
        })

        it('should return TRUE if empty string is passed (1)', () => {
            expect(isEmpty('')).toBeTruthy()
        })

        it('should return TRUE if empty string is passed (2)', () => {
            expect(isEmpty('      ')).toBeTruthy()
        })

        it('should return FALSE if non-empty string is passed', () => {
            expect(isEmpty('text')).toBeFalsy()
        })

        it('should return FALSE if number is passed', () => {
            expect(isEmpty(0)).toBeFalsy()
        })

        it('should return TRUE if empty (no props) object literal is passed', () => {
            expect(isEmpty({})).toBeTruthy()
        })

        it('should return FALSE if non-empty (at least one property) object literal is passed', () => {
            expect(isEmpty({ prop1: '' })).toBeFalsy()
        })

        it('should return TRUE if empty array is passed', () => {
            expect(isEmpty([])).toBeTruthy()
        })

        it('should return FALSE if non-empty array is passed', () => {
            expect(isEmpty([1])).toBeFalsy()
        })
    })
})
