import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { verify } from "jsonwebtoken";


export const verifyToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const auth: string | undefined = req.headers.authorization;
    
    if(!auth) throw new AppError("Missing bearer token.", 401)

    const [_bearer, token] = auth.split(" ")
    const decoded = verify(token, process.env.SECRET_KEY!)

    res.locals = { ...res.locals, decoded}

    return next()
}