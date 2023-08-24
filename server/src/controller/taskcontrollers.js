import { Taskmodel } from "../Model/Taskmodel.js"
import { StatusCodes } from 'http-status-codes'

export async function savetask(req, res) {
    try {
        req.body['createdOn'] = new Date()
        req.body['deadline'] = Date(req.body.deadline)
        const task = new Taskmodel(req.body)
        const data = await task.save()
        res.status(StatusCodes.CREATED).json(data)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Saving Error")
    }
}

export async function fetchtask(req, res) {
    try {
        const task = await Taskmodel.find()
        res.status(StatusCodes.OK).json(task)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Fetching error")
    }
}

export async function completedtask(req, res) {
    try {
        const task = await Taskmodel.find({ isCompleted: true })
        res.status(StatusCodes.OK).json(task)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}

export async function pendingtask(req, res) {
    try {
        const task = await Taskmodel.find({ isCompleted: false })
        res.status(StatusCodes.OK).json(task)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}

export async function taskdelete(req, res) {
    try {
        const task = await Taskmodel.findByIdAndDelete(req.params.id)
        res.status(StatusCodes.NO_CONTENT).json("Delete successfully")
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Deleting error")
    }
}

export async function fetchsingletask(req, res) {
    try {
        const task = await Taskmodel.find({ _id: req.params.id })
        res.status(StatusCodes.OK).json(task)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("fetching error")
    }

}

export async function updatetask(req, res) {
    const data = req.body
    const edittask = Taskmodel(data)
    try {
        const task = await Taskmodel.findByIdAndUpdate({ _id: req.params.id }, { isCompleted: false }, edittask)
        res.status(StatusCodes.OK).json(task)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Updating error")
    }

}


export async function markkiscompleted(req, res) {
    try {
        const completeddate = new Date()
        const task = await Taskmodel.findByIdAndUpdate(req.params.id, { completedOn: completeddate, isCompleted: true })
        res.status(StatusCodes.OK).json(task)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("completed Updating error")

    }

}



export async function updatetaskserver(req, res) {

    try {
        await Taskmodel.findByIdAndUpdate(req.params.id, req.body)
        const data = await Taskmodel.find()
        res.status(StatusCodes.OK).json(data)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Updating error")
    }

}



export async function deletecompleted(req, res) {
    try {
        const task = await TaskModel.deleteMany({ isCompleted: true })
        res.status(StatusCodes.NO_CONTENT).json("Delete Successfully")
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Delete error")
    }

}
