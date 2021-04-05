import React from 'react'
import PropTypes from 'prop-types'

const SavingItem = ({ savingItem }) => (
    <div className="savingFlexItem">
        <label>{savingItem.description}</label>
        <label>{savingItem.value}</label>
    </div>
)

SavingItem.propTypes = {
    savingItem: PropTypes.object.isRequired,
}
export default SavingItem
