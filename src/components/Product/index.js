import React from 'react'
import products from '../../products'
import ProductItem from '../ProductItem'

const Product = () => (
    <div className="productsFlexContainer">
        <h2 className="heading">Super Market</h2>
        {products.map((product) => (
            <ProductItem
                key={product.id}
                product={product}
                addToBasket={() => {}}
            />
        ))}
    </div>
)

export default Product
