import React from 'react'
import { render } from '@testing-library/react'
import TotalToPay from '.'

describe('TotalToPay', () => {
    let defaultProps = null
    beforeEach(() => {
        defaultProps = {
            totalToPay: 10.75,
        }
    })
    test('Total to pay component should render with total to pay and value', () => {
        const { getByText } = render(<TotalToPay {...{ ...defaultProps }}/>)
        expect(getByText(/Total to Pay/i)).toBeInTheDocument()
        expect(getByText(/10.75/i)).toBeInTheDocument()
    })
})
