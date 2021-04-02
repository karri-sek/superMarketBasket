import React from 'react'
import PropTypes from 'prop-types'

const BasketItem = ({ basketItem }) => {
    const { name, price } = basketItem
    return (
        <div className="basketItemRow">
            <label className="basketItemName">{name}</label>
            <label className="basketItemPrice">{price}</label>
        </div>
    )
}
BasketItem.propTypes = {
    basketItem: PropTypes.object.isRequired,
}

export default BasketItem
