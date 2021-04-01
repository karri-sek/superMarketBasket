import React from 'react'
import {render, screen} from '@testing-library/react'
import ProductItem from './index'
describe('Product', () =>{
    it('renders Product Item component', () => {
        const {getByText}=render(<ProductItem/>)
        expect(getByText('Face Masks')).toBeInTheDocument();
        expect(getByText('Toilet Paper')).toBeInTheDocument();
        expect(getByText('Hand Sanitizer')).toBeInTheDocument();
    })
    it('product item component should display price against each item', () => {
        const {getByText}=render(<ProductItem/>)
        expect(getByText('2.5')).toBeInTheDocument();
        expect(getByText('0.65')).toBeInTheDocument();
        expect(getByText('19.99')).toBeInTheDocument();
    })
})
