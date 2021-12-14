const express = require('express')
const routes = require('./routes.js')
const database = require('../database/database.js')
const teste = require("./services/pipedriveService")

const app = express()
const port = process.env.PORT

app.use(express.urlencoded({ extended: false}))
app.use(express.json())

app.use(routes)

database()

app.listen(port, () => {
    console.log(`Server online on http://localhost:${port}`)
})