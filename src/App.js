import React from 'react'
import Product from './components/Product'
import Basket from './components/Basket'
import Total from './components/Total'
import { Container } from '@material-ui/core'

import './App.css'

const App = () => (
    <Container maxWidth="sm">
        <Product />
        <Basket />
        <Total />
    </Container>
)

export default App
