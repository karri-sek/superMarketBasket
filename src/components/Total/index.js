import React from 'react'
import PropTypes from 'prop-types'

const Total = ({subTotal}) => (
    <div className="TotalFlexContainer">
        <div className="totalFlexItem">
            <label>Sub-total</label>
            <label>{subTotal}</label>
        </div>
    </div>
)

Total.propTypes = {
    subTotal: PropTypes.number.isRequired,
}
export default Total
