import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Error from './views/error'
import Home from './views/home'
import Links from './views/links'
import LockdownError from './views/lockdown-error'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Error} path="**" />
        <Route component={Home} exact path="/" />
        <Route component={Links} exact path="/links" />
        <Route component={LockdownError} exact path="/lockdown" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
