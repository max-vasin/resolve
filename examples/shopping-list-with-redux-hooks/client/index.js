import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import { createResolveStore, ResolveReduxProvider } from '@resolve-js/redux'

import getRoutes from './get-routes'
import getRedux from './get-redux'

import Routes from './components/Routes'

const entryPoint = (clientContext) => {
  const history = createBrowserHistory({ basename: clientContext.rootPath })
  const store = createResolveStore(clientContext, {
    serializedState: window.__INITIAL_STATE__,
    redux: getRedux(),
  })

  render(
    <ResolveReduxProvider context={clientContext} store={store}>
      <Router history={history}>
        <Routes routes={getRoutes()} />
      </Router>
    </ResolveReduxProvider>,
    document.getElementById('app-container')
  )
}

export default entryPoint
