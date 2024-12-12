import express from 'express'
import * as config from './config/config.js'
import { setupDatabase } from './db/dbSetup.js'
import postRoutes from './routes/posts.js'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app=express()
setupDatabase()
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT=config.PORT
app.use("/api/auth",authRoutes)
app.use("/api/posts",postRoutes)
app.use("/api/users",userRoutes)
app.listen(PORT,()=>{
    console.log("connected")
})