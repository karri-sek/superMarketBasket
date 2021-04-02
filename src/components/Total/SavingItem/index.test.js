import React from 'react'
import { render } from '@testing-library/react'
import SavingItem from '.'

describe('SavingItem', () => {
    let defaultProps = null
    beforeEach(() => {
        defaultProps = {
            savingItem: { name: 'Face Masks 2 for £4', discountValue: 1.05 },
        }
    })
    test('SavingItem component should render with one saving item element', () => {
        const { getByText } = render(<SavingItem {...{ ...defaultProps }} />)
        expect(getByText('Face Masks 2 for £4')).toBeInTheDocument()
        expect(getByText('1.05')).toBeInTheDocument()
    })
})
