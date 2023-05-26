import express from 'express'
import routes from './routes/index.js'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 5000;
const app = express()

app.use(routes)


app.listen(PORT, ()=>console.log(`...Listening at ${PORT}`))


