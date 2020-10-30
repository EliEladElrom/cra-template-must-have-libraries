// src/AppRouter.tsx

import React, { FunctionComponent, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import App from './App'

const AppRouter: FunctionComponent = () => {
  return (
    <Router>
      <RecoilRoot>
        <Suspense fallback={<span>Loading...</span>}>
          <Switch>
            <Route exact path="/" component={App} />
          </Switch>
        </Suspense>
      </RecoilRoot>
    </Router>
  )
}

/*
    EE: To replace Recoil state management with Redux Toolkit;

    import { Provider } from 'react-redux'
    import store from './redux/store'

    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </Provider>
    </Router>
 */

export default AppRouter
