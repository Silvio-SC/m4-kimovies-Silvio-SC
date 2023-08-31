import { Request, Response } from "express";
import { UserReturn, UserReturnArr } from "../interfaces";
import { userServices } from "../services";
import { userCreateSchema, userUpadeteSchema } from "../schemas";


const create = async (req: Request, res: Response) => {
    const verifyReq = userCreateSchema.parse(req.body)
    const user: UserReturn = await userServices.create(verifyReq)

    return res.status(201).json(user)
}

const read = async (req: Request, res: Response) => {
    const users: UserReturnArr = await userServices.read()
    return res.status(200).json(users)
}

const update = async (req: Request, res: Response) => {
    // const verifyReq = userUpadeteSchema.parse(req.body)
    // const user: UserReturn = await userServices.update(verifyReq)

    // return res.status(200).json(user)
}

const destroy = async (req: Request, res: Response) => {
    const user = res.locals.foundedUser
    await userServices.destroy(user)
    return res.status(204).json()
}


export default { create, read, update, destroy }