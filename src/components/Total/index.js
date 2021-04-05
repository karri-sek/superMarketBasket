import React from 'react'
import PropTypes from 'prop-types'
import { getSubTotal } from '../../utils'
const Total = ({ basketItems }) => (
    <div className="TotalFlexContainer">
        <div className="totalFlexItem">
            <label>Sub-total</label>
            <label>{getSubTotal(basketItems)}</label>
        </div>
    </div>
)

Total.propTypes = {
    basketItems: PropTypes.array.isRequired,
}
export default Total
