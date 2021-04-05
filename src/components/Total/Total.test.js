import React from 'react'
import { render } from '../../test-utils'
import Total from './Total'

describe('Total', () => {
    let defaultProps = null
    beforeEach(() => {
        defaultProps = {
            basketItems: [
                { id: 1, name: 'face masks', price: 10.5 },
                { id: 2, name: 'HandSanitizer', price: 10.5 },
            ],
        }
    })
    test('Total component should render with Sub-total text element', () => {
        const { getByText } = render(<Total {...{ ...defaultProps }} />)
        expect(getByText(/Sub-total/i)).toBeInTheDocument()
        expect(getByText(/21/i)).toBeInTheDocument()
    })
    test('Total component should render 0 when basketItems is empty', () => {
        defaultProps.basketItems = []
        const { getByText } = render(<Total {...{ ...defaultProps }} />)
        expect(getByText(/Sub-total/i)).toBeInTheDocument()
        expect(getByText(/0/i)).toBeInTheDocument()
    })
})
