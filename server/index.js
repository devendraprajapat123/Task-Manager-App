import express from 'express'
import 'dotenv/config'
import { DBconfig } from './src/DBconfig/Dbconfig.js'
import taskroutes from './src/Routers/taskroutes.js'
import registerroutes from './src/Routers/registerroutes.js'
import cors from 'cors'


const app = express()

app.use(express.json())
app.use(cors())

app.use(taskroutes)
app.use(registerroutes)

DBconfig()

app.listen(process.env.PORT, () => {
    console.log(`server is running in ${process.env.PORT}`);
})