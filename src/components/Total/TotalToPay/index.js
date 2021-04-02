import React from 'react'
import PropTypes from 'prop-types'

const TotalToPay = ({totalToPay}) => (
        <div className="totalFlexItem">
            <label>Total to pay</label>
            <label>{totalToPay}</label>
        </div>
)

TotalToPay.propTypes = {
    totalToPay: PropTypes.number.isRequired,
}
export default TotalToPay
