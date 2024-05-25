import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Jerror from './views/jerror'
import Home from './views/home'
import Links from './views/links'
import Page from './views/page'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Jerror} path="**" />
        <Route component={Home} exact path="/" />
        <Route component={Links} exact path="/links" />
        <Route component={Page} exact path="/page" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
