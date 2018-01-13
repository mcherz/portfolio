const express = require("express")
let app = express()

const port = process.env.PORT || 8080

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + "/dist"))

// set the home page route
app.get("/", function(req, res) {
  res.send("index.html")
})

app.listen(port, function() {
  console.log("Our app is running on " + port)
})