import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import supermarket from './reducers'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'

const store = createStore(supermarket)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
reportWebVitals()
