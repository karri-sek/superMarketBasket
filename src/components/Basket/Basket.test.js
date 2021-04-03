import React from 'react'
import { render } from '../../test-utils'
import Basket from './Basket'

describe('Basket', () => {
    let defaultProps = null
    beforeEach(() => {
        defaultProps = {
            basketItems: [{ name: 'Face Masks', price: 2.5 }],
        }
    })
    it('renders Basket component with one basket item', () => {
        const { getByText } = render(<Basket {...{ ...defaultProps }} />)
        expect(getByText('Basket')).toBeInTheDocument()
        expect(getByText('Face Masks')).toBeInTheDocument()
        expect(getByText('2.5')).toBeInTheDocument()
    })
    it('Basket component should render basket items', () => {
        defaultProps.basketItems = [
            { name: 'Face Masks', price: 2.5 },
            { name: 'Toilet Paper', price: 0.65 },
        ]
        const { getByText } = render(<Basket {...{ ...defaultProps }} />)
        expect(getByText('Basket')).toBeInTheDocument()
        expect(getByText('Toilet Paper')).toBeInTheDocument()
        expect(getByText('0.65')).toBeInTheDocument()
    })
})
