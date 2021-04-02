import React from 'react'
import PropTypes from 'prop-types'
const ProductItem = ({ product, addToBasket, removeFromBasket }) => {
    const { name, price } = product
    return (
        <div className="flexRow">
            <label className="productName">{name}</label>
            <label className="productPrice">{price}</label>
            <button
                className="addToBasketButton"
                onClick={addToBasket(product)}
            >
                Add to Basket
            </button>
            <button
                className="removeFromBasketButton"
                onClick={removeFromBasket(product)}
            >
                Remove from Basket
            </button>
        </div>
    )
}
ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
    addToBasket: PropTypes.func.isRequired,
    removeFromBasket: PropTypes.func.isRequired,
}

export default ProductItem
