const express = require("express")

let server = express()

const port = process.env.PORT || 8080

// make express look in the public directory for assets (css/js/img)
server.use(express.static(__dirname + "/dist"))

// set the home page route
server.get("/", function(req, res) {
  res.send("index.html")
})

server.listen(port, function() {
  console.log("server is running on " + port)
})
