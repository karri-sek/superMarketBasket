export const ADD_TO_BASKET = 'ADD_TO_BASKET'
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET'

export const addToBasket = (product) => ({
    type: ADD_TO_BASKET,
    product,
})

export const removeFromBasket = (product) => ({
    type: REMOVE_FROM_BASKET,
    product,
})
