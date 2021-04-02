import React from 'react'
import { render } from '@testing-library/react'
import Product from './index'
describe('Product', () => {
    it('renders Product component', () => {
        const { getByText } = render(<Product />)
        expect(getByText('Super Market')).toBeInTheDocument()
    })
    it('rendered product component should have the 3 products to display', () => {
        const { getByText } = render(<Product />)
        expect(getByText('Face Masks')).toBeInTheDocument()
        expect(getByText('Toilet Paper')).toBeInTheDocument()
        expect(getByText('Hand Sanitizer')).toBeInTheDocument()
    })
})
