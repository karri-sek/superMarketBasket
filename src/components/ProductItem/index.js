import React from 'react'
import products from '../../products';
const ProductItem = () => (
    products.map(product=><div key={product.name}>{product.name}</div>)
)

export default ProductItem;