import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './views/app'

import { AppContainer } from 'react-hot-loader'
import { PersistGate } from 'redux-persist/integration/react'


import setup from './redux/store';
const { store, persistor } = setup();

const render = Component => {
  ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component />
          </PersistGate>
        </Provider>
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
}

