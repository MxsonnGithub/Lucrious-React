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

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Jerror} path="**" />
        <Route component={Home} exact path="/" />
        <Route component={Links} exact path="/links" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
