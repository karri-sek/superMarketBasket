import React from 'react'
import { render } from '../../../test-utils'
import Savings from '.'

describe('Savings', () => {
    let defaultProps = null
    beforeEach(() => {
        defaultProps = {
            savingItems: [
                { id: 1, name: 'Face Masks 2 for £4', discountValue: 1.05 },
                { id: 1, name: 'Toilet Paper 6 for 5', discountValue: 0.65 },
            ],
        }
    })
    test('Savings component should render with Savings header label and item', () => {
        const { getByText } = render(<Savings {...{ ...defaultProps }} />)
        expect(getByText('Savings')).toBeInTheDocument()
        expect(getByText('Face Masks 2 for £4')).toBeInTheDocument()
    })
    test('Savings component should be able to render two saving items', () => {
        const { getByText } = render(<Savings {...{ ...defaultProps }} />)
        expect(getByText('Savings')).toBeInTheDocument()
        expect(getByText('Face Masks 2 for £4')).toBeInTheDocument()
        expect(getByText('Toilet Paper 6 for 5')).toBeInTheDocument()
    })
})
