import React from 'react'

import { Helmet } from 'react-helmet'

import Banner1 from '../components/banner1'
import './lockdown-error.css'

const LockdownError = (props) => {
  return (
    <div className="lockdown-error-container">
      <Helmet>
        <title>LockdownError - Lucrious</title>
        <meta property="og:title" content="LockdownError - Lucrious" />
      </Helmet>
      <Banner1></Banner1>
    </div>
  )
}

export default LockdownError
