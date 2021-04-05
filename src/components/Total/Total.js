import React from 'react'
import PropTypes from 'prop-types'
import { getSubTotal, isEmpty } from '../../utils'

const Total = ({ basketItems }) => (
    <div className="TotalFlexContainer">
        <div className="totalFlexItem">
            <label>Sub-total</label>
            <label>{isEmpty(basketItems) ? 0 : getSubTotal(basketItems)}</label>
        </div>
    </div>
)

Total.propTypes = {
    basketItems: PropTypes.array.isRequired,
}

export default Total
