import { StatusCodes } from "http-status-codes";
import { Registermodel } from "../Model/Register.js";


export async function savedata(req, res) {
    try {
        const { name, gender, email, phone, password, address, answer } = req.body

        if (!name) {
            return res.send({ message: "Name is required" })
        }
        if (!gender) {
            return res.send({ message: "gender is required" })
        }
        if (!email) {
            return res.send({ message: "email is required" })
        }
        if (!phone) {
            return res.send({ message: "phone is required" })
        }
        if (!password) {
            return res.send({ message: "password is required" })
        }
        if (!address) {
            return res.send({ message: "address is required" })
        }
        if (!answer) {
            return res.send({ message: "answer is required" })
        }
        const exitinguser = await Registermodel.findOne({ email })

        if (exitinguser) {
            return res.send({ message: "email already register please login" })
        }


        const data = await new Registermodel({ name, gender, email, phone, password, address, answer }).save()
        res.status(StatusCodes.CREATED).json({ message: "Register Successfully" })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: "Register error" })
    }

}


export async function login(req, res) {
    try {
        const { email, password } = req.body
        if (!email) {
            return res.send({ error: "Email is Required" })
        }
        if (!password) {
            return res.send({ error: "password is Required" })
        }

        const user = await Registermodel.findOne({ email, password })
        if (user.email == email || user.password == password) {
            res.status(StatusCodes.OK).json({
                success: true, message: "login successfully", user
            })
        } else {
            res.status(StatusCodes.BAD_REQUEST).send({ success: false, message: "Email or Password invalid" })
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: "Login error" })
    }

}