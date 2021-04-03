import React from 'react'
import { render } from '@testing-library/react'
import TotalSaving from '.'

describe('TotalSaving', () => {
    let defaultProps = null
    beforeEach(() => {
        defaultProps = {
            value: 1.65,
        }
    })
    test('TotalSaving Component should render the total saving value', () => {
        const { getByText } = render(<TotalSaving {...{ ...defaultProps }} />)
        expect(getByText(/Total savings/i)).toBeInTheDocument()
        expect(getByText('1.65')).toBeInTheDocument()
    })
})
