import React from 'react'

const TotalSaving = ({ value }) => (
    <div className="flexContainer">
        <div className="flexRow">
            <label className="productName">Total Savings</label>
            <label className="productPrice">{value}</label>
        </div>
    </div>
)

export default TotalSaving
