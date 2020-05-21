import cors from 'cors'
import express from 'express'
import createDatabase from './services/database.js' // importing factory to instantiate here
import socket from './services/socket.js' // instantiating in file
import * as webserver from './services/webserver.js' // importing functions directly without need to instantiate
import appRoutes from './routes'

// instantiating factories
const db = createDatabase()

export default function app() {
  const app = express()
  
  function init() {
    middlewares(app)
    routes(app)
    catchers(app);
    services()
    listen()
  }

  function services() {
    db.connect()
    db.disconnect()
    socket.open()
    socket.close()
    webserver.start();
    webserver.stop()
  }

  function middlewares(app) {
    app.use(express.json())
    app.use(cors())
  }

  function catchers(app) {
    app.use((err, req, res, next) => { if (err) return res.json({ error: "Uncaught error" }) });
  }

  function routes(app) {
    app.use(appRoutes)
  }

  function listen() {
    app.listen(process.env.PORT || 3333, () => console.log('> [system] Server started'))
  }

  return {
    init,
  }
}