import express from 'express'
import { login, saveregister } from '../controller/registercontroller.js'

const registerroutes = express.Router()

registerroutes.post('/register',saveregister)
registerroutes.post('/login',login)

export default registerroutes