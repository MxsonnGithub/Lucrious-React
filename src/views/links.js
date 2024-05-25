import React from 'react'

import { Helmet } from 'react-helmet'

import Toast5 from '../components/toast5'
import './links.css'

const Links = (props) => {
  return (
    <div className="links-container">
      <Helmet>
        <title>Links - Lucrious</title>
        <meta property="og:title" content="Links - Lucrious" />
      </Helmet>
      <Toast5></Toast5>
    </div>
  )
}

export default Links
