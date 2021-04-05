import React from 'react'
import PropTypes from 'prop-types'
import Savings from './Savings'
import { getSubTotal, isEmpty } from '../../utils'
import { getItemQuantity, getSavings } from '../../discountData/discountUtils'

const Total = ({ basketItems }) => {
    const itemQuantity = getItemQuantity(basketItems)
    const savingItems = getSavings(itemQuantity)
    return (
        <div className="TotalFlexContainer">
            <div className="totalFlexItem">
                <label>Sub-total</label>
                <label>
                    {isEmpty(basketItems) ? 0 : getSubTotal(basketItems)}
                </label>
            </div>
            <Savings savingItems={savingItems} />
        </div>
    )
}

Total.propTypes = {
    basketItems: PropTypes.array.isRequired,
}

export default Total
