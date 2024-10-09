import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express()
dotenv.config()


mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("DB is connected")
    }).catch((error) => {
        console.log("error: " + error)
    })

app.listen(3000, () => {
    console.log("Server is running in 3000 !!!")
})

