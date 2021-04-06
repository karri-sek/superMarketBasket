import React from 'react'
import PropTypes from 'prop-types'

const SavingItem = ({ savingItem }) => (
    <div className="flexRow">
        <label className="productName bold">{savingItem.description}</label>
        <label className="productPrice bold">{savingItem.value}</label>
    </div>
)

SavingItem.propTypes = {
    savingItem: PropTypes.object.isRequired,
}
export default SavingItem
