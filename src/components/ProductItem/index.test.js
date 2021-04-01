import React from 'react'
import {render, screen} from '@testing-library/react'
import ProductItem from './index'
describe('Product', () =>{
    it('renders Product Item component', () => {
        const {getByText}=render(<ProductItem/>)
        expect(getByText('Face Masks')).toBeInTheDocument();

    })
})
