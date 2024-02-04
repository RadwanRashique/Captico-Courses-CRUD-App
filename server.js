const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
const dbConnection = require('./Config/dbConfig')

const app = express()
app.use(cors("*"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

dbConnection()
const UserRoute = require('./Routes/UserRoutes')
app.use('/api/user', UserRoute)
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
