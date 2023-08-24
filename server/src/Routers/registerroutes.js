import express from 'express'
import { login, savedata } from '../controller/registercontroller.js'


const registerroutes = express.Router()

registerroutes.post('/register', savedata)
registerroutes.post('/login', login)

export default registerroutes