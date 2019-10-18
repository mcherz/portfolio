import React from "react"

const production = process.env.NODE_ENV === "production"

export default (html, wsPort) => {
  return <html>
    <head>
      <title>Matt Herz</title>
      <link rel="stylesheet" type="text/css" href={"/styles.css"} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {!production && <meta name="ws_port" content={wsPort} />}
    </head>
    <body>
      <div id="app">{html}</div>
      <script src={"/bundle.js"}></script>
      {!production && <script src="/ws_client.js" />}
    </body>
  </html>
}
