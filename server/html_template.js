import React from "react"

const production = process.env.NODE_ENV === "production"

export default (html, wsPort) => {
  return <html lang="en">
    <head>
      <title>Matt Herz</title>
      <link rel="stylesheet" type="text/css" href={"/styles.css"} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="A silly little chatbot toy that, if \
you ask nicely, will talk to you. Out loud."
      />
      {!production && <meta name="ws_port" content={wsPort} />}
    </head>
    <body>
      <div id="app">{html}</div>
      <script src={"/bundle.js"}></script>
      {!production && <script src="/ws_client.js" />}
    </body>
  </html>
}
