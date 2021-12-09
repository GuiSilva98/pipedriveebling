require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.MONGO_URL

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

function connectionDB() {
    mongoose.connect(url, config)
    const db = mongoose.connection;
    db.on("error", (error) => console.log(error))
    db.once("open", () => console.log("Connected to database!"))
}

module.exports = connectionDB;