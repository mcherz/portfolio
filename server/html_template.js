import React from "react"

const htmlTemplate = (html) => {
  return <html>
    <head>
      <title>Matt Herz</title>
      <link rel="stylesheet" type="text/css" href="styles.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
      <div id="app">{html}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
}

export default htmlTemplate
