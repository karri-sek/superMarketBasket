import React from 'react'
import { render } from '../../test-utils'

import Total from '.'

describe('Total', () => {
    let defaultProps = null
    beforeEach(() => {
        defaultProps = {
            subTotal: 12.4,
        }
    })
    test('Total component should render with Sub-total text element', () => {
        const { getByText } = render(<Total {...{ ...defaultProps }} />)
        expect(getByText(/Sub-total/i)).toBeInTheDocument()
        expect(getByText(/12.4/i)).toBeInTheDocument()
    })
})
