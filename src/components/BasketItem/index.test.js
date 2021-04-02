import React from 'react'
import { render, screen } from '@testing-library/react'
import BasketItem from '.'

describe('BasketItem', () => {
    let defaultProps = null
    beforeEach(() => {
        defaultProps = {
            basketItem: { name: 'Face Masks', price: 2.5 },
        }
    })
    it('BasketItem should render the given item with name and price', () => {
        render(<BasketItem {...{ ...defaultProps }} />)
        expect(screen.getByText('Face Masks')).toBeInTheDocument()
        expect(screen.getByText('2.5')).toBeInTheDocument()
    })
})
