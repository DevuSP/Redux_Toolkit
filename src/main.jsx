import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './app/store.js'

// store is prop and we are sending our store from store.js to all the wrapped content.
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>                
    <App />
  </Provider>,
)
