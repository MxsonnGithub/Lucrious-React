import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Toast5 from '../components/toast5'
import './directory.css'

const Directory = (props) => {
  return (
    <div className="directory-container">
      <Helmet>
        <title>directory - Lucrious</title>
        <meta property="og:title" content="directory - Lucrious" />
      </Helmet>
      <Toast5></Toast5>
      <span className="directory-text">
        <span>
          This is a directory page, Usually made for debugging purposes
        </span>
        <br></br>
      </span>
      <Link to="/" className="directory-navlink button">
        <span>
          <span>Home</span>
          <br></br>
        </span>
      </Link>
      <Link to="/lockdown" className="directory-navlink1 button">
        <span>
          <span>Lockdown</span>
          <br></br>
        </span>
      </Link>
      <Link to="/subcount" className="directory-navlink2 button">
        <span>
          <span>Lucrious sub count</span>
          <br></br>
        </span>
      </Link>
    </div>
  )
}

export default Directory
