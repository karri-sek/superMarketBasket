import React from 'react'
import PropTypes from 'prop-types'
import Savings from './Savings'
import TotalSaving from './TotalSaving'
import { getSubTotal, isEmpty, getTotalSavingsValue } from '../../utils'
import { getItemQuantity, getSavings } from '../../discountData/discountUtils'

const Total = ({ basketItems }) => {
    const itemQuantity = getItemQuantity(basketItems)
    const savingItems = getSavings(itemQuantity)
    const totalSavings = getTotalSavingsValue(savingItems)
    return (
        <div className="TotalFlexContainer">
            <div className="totalFlexItem">
                <label>Sub-total</label>
                <label>
                    {isEmpty(basketItems) ? 0 : getSubTotal(basketItems)}
                </label>
            </div>
            <Savings savingItems={savingItems} />
            <TotalSaving value={totalSavings} />
        </div>
    )
}

Total.propTypes = {
    basketItems: PropTypes.array.isRequired,
}

export default Total
