import React from 'react'
import PropTypes from 'prop-types'
import SavingItem from '../SavingItem'

const Savings = ({ savingItems }) => (
    <div className="savingsFlexContainer">
        <h2 className="savingsHeader">Savings</h2>
        {savingItems.map((savingItem, index) => (
            <SavingItem key={index} savingItem={savingItem} />
        ))}
    </div>
)

Savings.propTypes = {
    savingItems: PropTypes.array.isRequired,
}
export default Savings
