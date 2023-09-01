import { Request, Response } from "express"
import { loginSchema } from "../schemas"
import { loginServices } from "../services"
import { Token } from "../interfaces"

const login = async (req: Request, res: Response) => {
    const body = loginSchema.parse(req.body)
    const user: Token = await loginServices.login(body)

    return res.status(200).json(user)
}

export default { login }
