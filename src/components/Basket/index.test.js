import React from 'react'
import { render } from '@testing-library/react'
import Basket from './index'

describe('Basket', () => {
    it('renders Basket component', () => {
        const { getByText } = render(<Basket />)
        expect(getByText('Basket')).toBeInTheDocument()
    })
})
