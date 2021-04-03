import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../actions'

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
                basketItems: state.basketItems.filter(
                    (bItem) => bItem.id !== action.product.id
                ),
            }
        default:
            return state
    }
}

export default supermarket
