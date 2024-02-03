const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const dotenv=require('dotenv')
const app=express()
app.use(cors("*"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/api/user',UserRoute)
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
