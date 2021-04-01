import React from 'react'
import products from '../../products';
const ProductItem = () => (
    products.map(product=><><div key={product.name}>{product.name}</div>
    <div key={product.price}>{product.price}</div></>)
)

export default ProductItem;