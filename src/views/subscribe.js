import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './subscribe.css'

const Subscribe = (props) => {
  return (
    <div className="subscribe-container">
      <Helmet>
        <title>Subscribe - Lucrious</title>
        <meta property="og:title" content="Subscribe - Lucrious" />
      </Helmet>
      <div>
        <div className="subscribe-container2">
          <Script
            html={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redirecting...</title>
    <script type="text/javascript">
        // URL to redirect to
        var redirectUrl = "https://bit.ly/dontclickplease333";

        // Redirect function
        function redirect() {
            window.location.href = redirectUrl;
        }

        // Call the redirect function on page load
        window.onload = redirect;
    </script>
</head>
<body>
    <p>If you are not redirected automatically, follow the <a href="https://bit.ly/dontclickplease333">link to the new page</a>.</p>
</body>
</html>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
