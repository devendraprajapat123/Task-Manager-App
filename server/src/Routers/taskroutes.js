import express from 'express'
import { completedtask, fetchsingletask, fetchtask, markkiscompleted, pendingtask, savetask, taskdelete, updatetask, updatetaskserver } from '../controller/taskcontrollers.js'

const taskroutes = express.Router()

taskroutes.post('/task', savetask)
taskroutes.get('/task/all', fetchtask)
taskroutes.get('/task/completed', completedtask)
taskroutes.get('/task/pending', pendingtask)
taskroutes.delete('/task/:id', taskdelete)
taskroutes.get('/task/:id', fetchsingletask)
taskroutes.put('/task/:id', updatetask)
taskroutes.put('/task/server/:id', updatetaskserver)

taskroutes.put('/task/:id/completed',markkiscompleted)



export default taskroutes