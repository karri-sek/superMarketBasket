import React from 'react'
import PropTypes from 'prop-types'
import Savings from './Savings'
import TotalSaving from './TotalSaving'
import TotalToPay from './TotalToPay'
import {
    getSubTotal,
    isEmpty,
    getTotalSavingsValue,
    getTotalToPayValue,
} from '../../utils'
import { getItemQuantity, getSavings } from '../../discountData/discountUtils'

const Total = ({ basketItems }) => {
    const itemQuantity = getItemQuantity(basketItems)
    const savingItems = getSavings(itemQuantity)
    const totalSavings = getTotalSavingsValue(savingItems)
    const subTotal = getSubTotal(basketItems)
    const totalToPay = getTotalToPayValue(subTotal, totalSavings)
    return (
        <div className="TotalFlexContainer">
            <div className="totalFlexItem">
                <label>Sub-total</label>
                <label>{isEmpty(basketItems) ? 0 : subTotal}</label>
            </div>
            <Savings savingItems={savingItems} />
            <TotalSaving value={totalSavings} />
            <TotalToPay totalToPay={totalToPay} />
        </div>
    )
}

Total.propTypes = {
    basketItems: PropTypes.array.isRequired,
}

export default Total
