import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { expressjwt as ejwt } from 'express-jwt'
import instrumentAssignedRouter from './routes/instrumentAssignedRouter.js'
import { instrumentsRouter } from './routes/instrumentsRouter.js'
import userRouter from './routes/userRouter.js'
import errorHandler from './middlewares/errorHandler.js'
import timeRequest from './middlewares/timeRequest.js'
import registerHTTP from './middlewares/registerHTTP.js'



dotenv.config()
const app = express()
app.use(express.json())
app.use(cors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
}))

app.use(timeRequest)
app.use(registerHTTP)
app.use(ejwt({
    secret: process.env.SECRET_KEY,
    algorithms: ['HS256'],
}).unless({
    path: ['/api/login/', '/api/register/', '/api/refresh-token/']
}))

app.use('/api', instrumentsRouter(), userRouter, instrumentAssignedRouter)
app.use(errorHandler)



const SERVER_PORT = process.env.SERVER_PORT || 3001
app.listen(SERVER_PORT, () => {
    console.log(`Server running on port http://localhost:${SERVER_PORT}`)
})



