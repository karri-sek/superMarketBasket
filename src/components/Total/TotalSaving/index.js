import React from 'react'

const TotalSaving = ({ value }) => (
    <div className="flexContainer">
        <div className="flexRow">
            <label className="productName bold">Total Savings</label>
            <label className="productPrice bold">{value}</label>
        </div>
    </div>
)

export default TotalSaving
