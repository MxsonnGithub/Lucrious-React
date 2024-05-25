import React from 'react'

import { Helmet } from 'react-helmet'

import Banner1 from '../components/banner1'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Lucrious</title>
        <meta property="og:title" content="Page - Lucrious" />
      </Helmet>
      <Banner1></Banner1>
    </div>
  )
}

export default Page
