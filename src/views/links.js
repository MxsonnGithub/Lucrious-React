import React from 'react'

import { Helmet } from 'react-helmet'

import Toast5 from '../components/toast5'
import './links.css'

const Links = (props) => {
  return (
    <div className="links-container">
      <Helmet>
        <title>Links - Lucrious</title>
        <meta
          name="description"
          content="Lucrious links, Such as discord youtube tiktok and more!"
        />
        <meta property="og:title" content="Links - Lucrious" />
        <meta
          property="og:description"
          content="Lucrious links, Such as discord youtube tiktok and more!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/46f00f36-26a5-4fb9-9573-1b391089a425/6c38a3b9-beaa-4196-ba65-17a416d41d82?org_if_sml=1&amp;force_format=original"
        />
        <meta name="robots" content="noindex" />
      </Helmet>
      <Toast5></Toast5>
    </div>
  )
}

export default Links
