import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import cookieParser from 'cookie-parser';


const app = express()
dotenv.config()

app.use(express.json())
app.use(cookieParser());

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("DB is connected")
    }).catch((error) => {
        console.log("error: " + error)
    })

app.listen(3000, () => {
    console.log("Server is running in 3000 !!!")
})

app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});
