import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App js component', () => {
    test('render the super market product header', () => {
        render(<App />)
        const linkElement = screen.getByText(/Super Market/i)
        expect(linkElement).toBeInTheDocument()
    })
    test('render the super market product items', () => {
        const { getByText } = render(<App />)
        expect(getByText('Face Masks')).toBeInTheDocument()
        expect(getByText('Toilet Paper')).toBeInTheDocument()
        expect(getByText('Hand Sanitizer')).toBeInTheDocument()
    })
    it('3 add to basket items on the app component', async () => {
        render(<App />)
        const buttonItems = await screen.findAllByRole('button', {
            name: /Add to Basket/i,
        })
        expect(buttonItems).toHaveLength(3)
        const buttonItemsWithText = await screen.findAllByText(/add to Basket/i)
        expect(buttonItemsWithText).toHaveLength(3)
    })
    it('3 remove from basket buttons on the app component', async () => {
        render(<App />)
        const buttonItems = await screen.findAllByRole('button', {
            name: /Remove from Basket/i,
        })
        expect(buttonItems).toHaveLength(3)
        const buttonItemsWithText = await screen.findAllByText(
            /Remove from Basket/i
        )
        expect(buttonItemsWithText).toHaveLength(3)
    })
})
