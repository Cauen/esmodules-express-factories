const express = require('express')
const routes = express.Router()

routes.get("/", (req, res) => res.send("Hello world"))
routes.get("/files", (req, res) => res.json({files: [1,2,3,4,5]}))
routes.get("/error", (req, res) => {
    throw new Error('Its an error')
    return res.json({ success: true })
})

export default routes