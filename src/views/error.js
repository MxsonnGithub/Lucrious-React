import React from 'react'

import { Helmet } from 'react-helmet'

import NotFound4 from '../components/not-found4'
import './error.css'

const Error = (props) => {
  return (
    <div className="error-container">
      <Helmet>
        <title>error - Lucrious</title>
        <meta property="og:title" content="error - Lucrious" />
      </Helmet>
      <NotFound4></NotFound4>
    </div>
  )
}

export default Error
