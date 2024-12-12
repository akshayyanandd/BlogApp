import express from 'express'
import * as config from './config/config.js'
import { setupDatabase } from './db/dbSetup.js'
import postsRouter from './routes/posts.js'


const app=express()
setupDatabase()

app.use(express.json())

const PORT=config.PORT
app.use("/api/posts",postsRouter)
app.listen(PORT,()=>{
    console.log("connected")
})