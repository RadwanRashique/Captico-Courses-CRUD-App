const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const MONGO_URL = process.env.MONGODB_URL

const dbConfig = () => {
    try {
        mongoose.connect(MONGO_URL)
        console.log("MongoDB database connected")

    }
    catch (error) {
        console.error(error)
        process.exit(1)
    }
}

module.exports = dbConfig