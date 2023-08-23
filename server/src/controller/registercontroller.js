import { StatusCodes } from 'http-status-codes'
import { Registermodel } from '../Model/Register.js'
import bcrypt from 'bcrypt'
import Jwt from "jsonwebtoken";



export async function saveregister(req, res) {
    try {
        const encreptedpassword = bcrypt.hashSync(req.body.password, 12)
        req.body['password'] = encreptedpassword
        const { name,gender, phone, email, address, answer, password } = req.body
        if (!name) {
            return res.status(StatusCodes.BAD_REQUEST).send({ message: "name is required" })
        }
        if (!gender) {
            return res.status(StatusCodes.BAD_REQUEST).send({ message: "name is required" })
        }
        if (!phone) {
            return res.status(StatusCodes.BAD_REQUEST).send({ message: "phone is required" })
        }
        if (!email) {
            return res.status(StatusCodes.BAD_REQUEST).send({ message: "email is required" })
        }

        if (!address) {
            return res.status(StatusCodes.BAD_REQUEST).send({ message: "address is required" })
        }
        if (!answer) {
            return res.status(StatusCodes.BAD_REQUEST).send({ message: "answer is required" })
        }
        if (!password) {
            return res.status(StatusCodes.BAD_REQUEST).send({ message: "answer is required" })
        }


        const data = new Registermodel({ name,gender, phone, email, password, address, answer })
        const register = await data.save()
        res.status(StatusCodes.CREATED).json(register)

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }

}


export async function login(req, res) {

    try {
        const { email, password } = req.body
        if (!email) {
            return res.json({ message: "email is required" })

        }
        if (!password) {
            return res.json({ message: "password is required" })

        }

        const user = await Registermodel.findOne({ email, password })
        if (user.email == email) {
            if (user.password == password) {
                const token = Jwt.sign({ userId: user._id }, 'deven123')
                res.status(StatusCodes.OK).json(token)
            } else {
                res.status(StatusCodes.BAD_REQUEST).json({ message: "Password is wrong" })
            }
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({ message: "email  is wrong" })
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("login error")

    }

}