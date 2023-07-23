import { StatusCodes } from 'http-status-codes'
import { Registermodel } from '../Model/Register.js'
export async function saveregister(req, res) {
    try {
        const { name, phone, email, password } = req.body
        if (!name) {
            return res.status(StatusCodes.BAD_REQUEST).send({ message: "name is required" })
        }
        if (!phone) {
            return res.status(StatusCodes.BAD_REQUEST).send({ message: "phone is required" })
        }
        if (!email) {
            return res.status(StatusCodes.BAD_REQUEST).send({ message: "email is required" })
        }
        if (!password) {
            return res.status(StatusCodes.BAD_REQUEST).send({ message: "password is required" })
        }
        const data = new Registermodel({ name, phone, email, password })
        const register = await data.save()
        res.status(StatusCodes.CREATED).json(register)

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Saving error")
    }

}


export async function login(req, res) {

    try {
        const{email,password} = req.body
        if (!email) {
            return res.json({ message: "email is required" })

        }
        if (!password) {
            return res.json({ message: "password is required" })

        }

        const user = await Registermodel.findOne({ email, password })
        if (user.email == email || user.password == password) {
            res.status(StatusCodes.OK).json({ message: "login successfully" })
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({ message: "email or password is wrong" })
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("login error")

    }

}