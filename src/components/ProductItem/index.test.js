import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import ProductItem from './index'
describe('Product Item', () =>{
    let defaultProps = null;
    beforeEach(() => {
        defaultProps={
            addToBasket : jest.fn(()=>{}),
            product : {}
        }
      });
    it('Product Item component should have face mask item', () => {
        defaultProps.product = { name: 'Face Masks', price: 2.5 }
        render(<ProductItem {...{ ...defaultProps }} />);
        expect(screen.getByText('Face Masks')).toBeInTheDocument();
        expect(screen.getByText('2.5')).toBeInTheDocument();
    })
    it('Product Item component should have Toilet Paper item', () => {
        defaultProps.product = { name: 'Toilet Paper', price: 0.65 }
        render(<ProductItem {...{ ...defaultProps }} />);
        expect(screen.getByText('Toilet Paper')).toBeInTheDocument();
        expect(screen.getByText('0.65')).toBeInTheDocument();
    })
    it('Product Item component should have Hand Sanitizer item', () => {
        defaultProps.product = { name: 'Hand Sanitizer', price: 19.99 }
        render(<ProductItem {...{ ...defaultProps }} />);
        expect(screen.getByText('Hand Sanitizer')).toBeInTheDocument();
        expect(screen.getByText('19.99')).toBeInTheDocument();
    })
    it('Product Item component should have the button labeled \'add to basket\'', () => {
        defaultProps.product = { name: 'Hand Sanitizer', price: 19.99 }
        render(<ProductItem {...{ ...defaultProps }} />);
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByText(/add to basket/i)).toBeInTheDocument();
    })

    it('click on add to basket should call addToBasket function', () => {
        defaultProps.product = { name: 'Hand Sanitizer', price: 19.99 }
        render(<ProductItem {...{ ...defaultProps }} />);
        const addToBasketButton = screen.getByRole('button');
        userEvent.click(addToBasketButton);
        expect(defaultProps.addToBasket).toHaveBeenCalledTimes(1);
    })
})
