import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { ZodError } from "zod";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";

export const handleErrors = (
    error: unknown,
    req: Request,
    res: Response,
    next: NextFunction
): Response => {
    if (error instanceof AppError) {
        return res.status(error.status).json({message: error.message})
    }

    if (error instanceof ZodError) {
        return res.status(400).json({message: error.errors })
    }

    if (error instanceof TokenExpiredError) {
        return res.status(401).json({message: error.message })
    }

    if (error instanceof JsonWebTokenError) {
        return res.status(401).json({message: error.message })
    }
    console.error(error)
    return res.status(500).json({ message: "Internal server error" })
}