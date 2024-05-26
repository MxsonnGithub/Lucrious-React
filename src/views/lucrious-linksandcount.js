import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './lucrious-linksandcount.css'

const LucriousLinksandcount = (props) => {
  return (
    <div className="lucrious-linksandcount-container">
      <Helmet>
        <title>Lucrious-linksandcount - Lucrious</title>
        <meta property="og:title" content="Lucrious-linksandcount - Lucrious" />
      </Helmet>
      <span className="lucrious-linksandcount-text">
        Lucrious&apos;s Live Subcount!
      </span>
      <div className="lucrious-linksandcount-container1">
        <div className="lucrious-linksandcount-container2">
          <div className="lucrious-linksandcount-container3">
            <Script
              html={`<iframe height="80px" width="300px" frameborder="0" src=https://livecounts.io/embed/youtube-live-subscriber-counter/UC_j08J606UOlGgk3nsUnj6A style="border: 0; width:300px; height:80px;"></iframe>`}
            ></Script>
          </div>
        </div>
      </div>
      <a
        href="https://discord.gg/jTsHqEEyPV"
        target="_blank"
        rel="noreferrer noopener"
        className="lucrious-linksandcount-link button"
      >
        <span>My Discord</span>
      </a>
      <a
        href="https://www.youtube.com/@RealLucrious"
        target="_blank"
        rel="noreferrer noopener"
        className="lucrious-linksandcount-link1 button"
      >
        <span>
          <span>My YouTube</span>
          <br></br>
        </span>
      </a>
    </div>
  )
}

export default LucriousLinksandcount
