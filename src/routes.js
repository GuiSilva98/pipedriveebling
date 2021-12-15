const express = require('express')
const routes = express.Router();
const dealsController = require('./controllers/dealsController')

routes.get("/", (req, res) => {
    res.send("access /getdeals or /insertdeals")
})
routes.get("/insertdeals", dealsController.store)
routes.get("/getdeals", dealsController.find)

module.exports = routes;