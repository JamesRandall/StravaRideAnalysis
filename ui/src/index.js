import './styles/bootstrap.min.css';
import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import GetStarted from './routes/auth/components/GetStarted'
import AppContainer from './routes/app/containers/AppContainer';
import SignOutContainer from './routes/auth/containers/SignOutContainer'
import DashboardContainer from './routes/dashboard/containers/DashboardContainer'
import TokenResponseContainer from './routes/auth/containers/TokenResponseContainer'
import RouteProfileContainer from './routes/routeProfile/containers/RouteProfileContainer'
import CompareSegmentsContainer from './routes/segments/containers/CompareSegmentsContainer'
import createStore from './state/storeProvider'

const store = createStore()

const requireAuth = (nextState, replace) => {
  const state = store.getState()
  if (state.auth.accessToken === undefined) {
    replace({
      pathname: '/'
    })
  }
}

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider {...{store}}>
    <Router history={browserHistory} >
      <Route path="/" component={AppContainer}>
        <IndexRoute component={GetStarted} />
        <Route path="/signOut" component={SignOutContainer} />
        <Route path="/tokenResponse" component={TokenResponseContainer} />
        <Route path="/dashboard" component={DashboardContainer} onEnter={requireAuth} />
        <Route path="/routeProfile/:id" component={RouteProfileContainer} onEnter={requireAuth} />
        <Route path="/compareSegments/:id" component={CompareSegmentsContainer} onEnter={requireAuth} />
      </Route>
    </Router>
  </Provider>,
  rootElement
);
