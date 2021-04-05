import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../actions'
import { removeBasketItem } from '../utils/index'

const initialState = {
    basketItems: [],
}

const supermarket = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            return {
                ...state,
                basketItems: [action.product, ...state.basketItems],
            }
        case REMOVE_FROM_BASKET:
            return {
                ...state,
                basketItems: removeBasketItem(
                    state.basketItems,
                    action.product
                ),
            }
        default:
            return state
    }
}

export default supermarket
