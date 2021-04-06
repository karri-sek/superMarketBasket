import React from 'react'
import PropTypes from 'prop-types'

const SavingItem = ({ savingItem }) => (
    <div className="flexRow">
        <label className="productName">{savingItem.description}</label>
        <label className="productPrice">{savingItem.value}</label>
    </div>
)

SavingItem.propTypes = {
    savingItem: PropTypes.object.isRequired,
}
export default SavingItem
