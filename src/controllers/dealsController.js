const objectId = require('mongodb').ObjectId;
const deals = require("../models/deals")
const pipedriveService = require("../services/pipedriveService")

async function find(req, res) {

    try {
        const allDeals = await deals.find();
        return res.send( allDeals )
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
}

async function store(req, res) {
    try {
        const dealsPipeDrive = await pipedriveService.getDealsWon()

        if (!dealsPipeDrive) return console.log("No deals won")

        for (let dealPD of dealsPipeDrive) {
            const dailyDeals = new deals({
                _id: new objectId(),
                totalPrice: dealPD.weighted_value
            })
            await dailyDeals.save()
        }
        return res.send("Sucess")

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = { store, find }