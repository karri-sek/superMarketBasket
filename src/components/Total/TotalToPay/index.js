import React from 'react'
import PropTypes from 'prop-types'

const TotalToPay = ({ totalToPay }) => (
    <div className="flexContainer">
        <div className="flexRow">
            <label className="productName">Total to pay</label>
            <label className="productPrice">{totalToPay}</label>
        </div>
    </div>
)

TotalToPay.propTypes = {
    totalToPay: PropTypes.number.isRequired,
}
export default TotalToPay
