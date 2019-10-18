import WebSocket from "ws"

import chokidar from "chokidar"
import fs from "fs"
import path from "path"

import webpack from "webpack"
import devConfig from "../webpack.dev"

export default (components, server, port) => {
  webpack(devConfig).run()

  const wss = new WebSocket.Server({ server })
    console.log("dev socket started on port", port, "...") //eslint-disable-line

  wss.on("connection", ws => {
    let compileId = 0
    ws.send("development server connected")

    const watcher = chokidar.watch("src/", {
      ignored: /(^|[/\\])\../, // ignore dotfiles
      persistent: true
    })

    watcher.on("change", filePath => {
      ws.send(`${filePath} changed; recompiling...`)

      compileId++
      const currentCompileId = compileId

      webpack(devConfig).run((err, stats) => {
        if (err || stats.hasErrors()) {
          ws.send("compiler errors :-(")
          ws.send(err || stats.toJson().errors[0])
          console.error(err || stats.toJson().errors[0])
        } else if (currentCompileId === compileId) {
          const file = fs.readFileSync(path.join(process.cwd(), "dist/root.js"), "utf8")
          components.root = eval(file).default // mutates the component served out of server_core
          ws.send("reload")
        }
      })
    })

  })

  process.on("SIGINT", () => {
    wss.clients.forEach(client => {
      client.send("dev server closed; bye-bye friend!")
    })
    server.close()
    process.exit(0)
  })
  process.on("SIGTERM", () => {
    wss.clients.forEach(client => {
      client.send("dev server tipped over ☠️; RIP sweet server we will miss you")
    })
    server.close()
    process.exit(0)
  })

  return server
}
