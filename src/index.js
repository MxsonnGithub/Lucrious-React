import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import LucriousLinksandcount from './views/lucrious-linksandcount'
import LockdownError from './views/lockdown-error'
import Directory from './views/directory'
import Home from './views/home'
import Subscribe from './views/subscribe'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={LucriousLinksandcount} exact path="/subcount" />
        <Route component={LockdownError} exact path="/lockdown" />
        <Route component={Directory} exact path="/dir" />
        <Route component={Home} exact path="/" />
        <Route component={Subscribe} exact path="/subscribe" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
