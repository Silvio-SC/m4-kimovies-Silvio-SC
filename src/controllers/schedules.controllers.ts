import { Request, Response } from "express";
import { schedulesCreateSchema } from "../schemas"
import { schedulesServices } from "../services";

const create = async (req: Request, res: Response) => {
    const verifyReq = schedulesCreateSchema.parse(req.body)
    const id = res.locals.decoded.sub;

    const schedule = await schedulesServices.create({
        ...verifyReq,
        userId: Number(id)
    })

    return res.status(201).json({message: "Schedule created"})
}

const read = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const schedule = await schedulesServices.read(id)

    return res.status(200).json(schedule)
}


export default { create, read }