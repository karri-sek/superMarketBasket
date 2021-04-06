import React from 'react'
import products from '../../products'
import ProductItem from '../ProductItem'

const Product = () => (
    <div className="productsFlexContainer">
        <div className="flexRowHeading">Super Market</div>
        <div className="flexRowControlHeading">
            <label>Product</label>
            <label>Price</label>
            <label>Add Item</label>
            <label>Remove Item </label>
        </div>
        {products.map((product) => (
            <ProductItem
                key={product.id}
                product={product}
                addToBasket={() => {}}
                removeFromBasket={() => {}}
            />
        ))}
    </div>
)

export default Product
