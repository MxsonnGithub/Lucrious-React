import React from 'react'

import { Helmet } from 'react-helmet'

import NotFound4 from '../components/not-found4'
import './jerror.css'

const Jerror = (props) => {
  return (
    <div className="jerror-container">
      <Helmet>
        <title>Jerror - Lucrious</title>
        <meta property="og:title" content="Jerror - Lucrious" />
      </Helmet>
      <NotFound4></NotFound4>
    </div>
  )
}

export default Jerror
