import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from '../shared/store/configureStore'
import { hydrate } from 'react-dom'
import App from '../shared/App'

const initialState = window.__PRELOADED_STATE__
const store = configureStore(initialState)

delete window.__PRELOADED_STATE__

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
