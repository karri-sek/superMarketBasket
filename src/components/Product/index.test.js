import React from 'react'
import {render, screen} from '@testing-library/react'
import Product from './index'
describe('Product', () =>{
    it('renders Product component', () => {
        const {getByText}=render(<Product/>)
        expect(getByText('Super Market')).toBeInTheDocument();
    })
})
