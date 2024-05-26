import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import LockdownError from './views/lockdown-error'
import Directory from './views/directory'
import Home from './views/home'
import LucriousLinksandcount from './views/lucrious-linksandcount'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={LockdownError} exact path="/lockdown" />
        <Route component={Directory} exact path="/dir" />
        <Route component={Home} exact path="/" />
        <Route component={LucriousLinksandcount} exact path="/subcount" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
