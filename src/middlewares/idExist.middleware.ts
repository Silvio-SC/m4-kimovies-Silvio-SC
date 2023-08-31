import { NextFunction, Request, Response } from "express";
import { userRepo } from "../repositories";
import { AppError } from "../errors";


export const idExists = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    const foundedUser = await userRepo.findOneBy({ id })

    if (foundedUser) throw new AppError("User not found")
   
    res.locals.foundedUser

    return next()
}