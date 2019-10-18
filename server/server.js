import makeServer from "./server_core"

const port = process.env.PORT || 9090

const server = makeServer(port)
server.listen(port, () => {
  console.log(`listening on port ${port}...`) //eslint-disable-line
})
