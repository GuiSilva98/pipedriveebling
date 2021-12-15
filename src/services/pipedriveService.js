require('dotenv').config();
const axios = require('axios');

async function getDealsWon() {
    try {
        let options = {
            method: 'GET',
            url: `https://${process.env.PIPELINE_URL}.pipedrive.com/v1/deals?api_token=${process.env.PIPELINE_TOKEN}`
        }

        let response = await axios(options)

        let deals = response.data.data
        let dealsWon = []
        for (let deal of deals) {
            if (deal.status == 'won') dealsWon.push(deal)
        }
        return dealsWon
    } catch (error) {
        console.error(error)
    }
}

module.exports = { getDealsWon }
