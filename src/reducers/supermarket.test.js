import supermarket from './supermarket'

describe('supermarket reducer', () => {
    test('initial state should be empty', () => {
        expect(supermarket({}, {})).toEqual({})
    })
    describe('ADD_TO_BASKET:', () => {
        test('add item to the basket items ', () => {
            const action = {
                type: 'ADD_TO_BASKET',
                product: { name: 'Face Masks', price: 2.5 },
            }
            const expectedState = {
                basketItems: [{ name: 'Face Masks', price: 2.5 }],
            }
            expect(supermarket(undefined, action)).toEqual(expectedState)
        })
        test('adding new item to the basket items should have all the products in the basket items', () => {
            const action = {
                type: 'ADD_TO_BASKET',
                product: { name: 'Face Masks', price: 2.5 },
            }
            const initialState = {
                basketItems: [{ name: 'Toilet Paper', price: 0.65 }],
            }
            const expectedState = {
                basketItems: [
                    { name: 'Face Masks', price: 2.5 },
                    { name: 'Toilet Paper', price: 0.65 },
                ],
            }
            expect(supermarket(initialState, action)).toEqual(expectedState)
        })
    })
    describe('REMOVE_FROM_BASKET:', () => {
        test('remove items from the basketItems ', () => {
            const action = {
                type: 'REMOVE_FROM_BASKET',
                product: { id: 1, name: 'Face Masks', price: 2.5 },
            }
            const expectedState = {
                basketItems: [],
            }
            expect(supermarket(undefined, action)).toEqual(expectedState)
        })
        test('remove the existing basketItem', () => {
            const action = {
                type: 'REMOVE_FROM_BASKET',
                product: { id: 1, name: 'Face Masks', price: 2.5 },
            }
            const initialState = {
                basketItems: [{ id: 1, name: 'Face Masks', price: 2.5 }],
            }
            const expectedState = {
                basketItems: [],
            }
            expect(supermarket(initialState, action)).toEqual(expectedState)
        })
        test('when the items are not matched then existing basketItems should not be altered', () => {
            const action = {
                type: 'REMOVE_FROM_BASKET',
                product: { id: 1, name: 'Face Masks', price: 2.5 },
            }
            const initialState = {
                basketItems: [{ id: 2, name: 'Toilet Paper', price: 4.5 }],
            }
            const expectedState = {
                basketItems: [{ id: 2, name: 'Toilet Paper', price: 4.5 }],
            }
            expect(supermarket(initialState, action)).toEqual(expectedState)
        })
        test('When multiple product items matched by id it should remove the first find out element', () => {
            const action = {
                type: 'REMOVE_FROM_BASKET',
                product: { id: 1, name: 'Face Masks', price: 2.5 },
            }
            const initialState = {
                basketItems: [
                    { id: 2, name: 'Toilet Paper', price: 4.5 },
                    { id: 1, name: 'Face Masks', price: 2.5 },
                    { id: 1, name: 'Face Masks', price: 2.5 },
                ],
            }
            const expectedState = {
                basketItems: [
                    { id: 2, name: 'Toilet Paper', price: 4.5 },
                    { id: 1, name: 'Face Masks', price: 2.5 },
                ],
            }
            expect(supermarket(initialState, action)).toEqual(expectedState)
        })
    })
})
