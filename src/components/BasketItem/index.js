import React from 'react'
import PropTypes from 'prop-types'

const BasketItem = ({ basketItem }) => {
    const { name, price } = basketItem
    return (
        <div className="flexRow">
            <label className="productName">{name}</label>
            <label className="productPrice">{price}</label>
        </div>
    )
}
BasketItem.propTypes = {
    basketItem: PropTypes.object.isRequired,
}

export default BasketItem
