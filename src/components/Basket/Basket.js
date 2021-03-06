import React from 'react'
import PropTypes from 'prop-types'
import BasketItem from '../BasketItem'

const Basket = ({ basketItems }) => (
    <div className="flexContainer">
        <h2 className="flexRowHeading">Basket</h2>
        {basketItems.map((basketItem, index) => (
            <BasketItem key={index} basketItem={basketItem} />
        ))}
    </div>
)

Basket.propTypes = {
    basketItems: PropTypes.array.isRequired,
}
export default Basket
