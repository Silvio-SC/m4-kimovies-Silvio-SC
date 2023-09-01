import { Router } from "express";
import { userControllers } from "../controllers";
import middlewares from "../middlewares";

export const userRouter: Router = Router();

userRouter.post("", userControllers.create)
userRouter.get("", 
    middlewares.verifyToken, 
    middlewares.verifyAdm, 
    userControllers.read
)

userRouter.use("/:id", middlewares.verifyToken, middlewares.idExists)

userRouter.patch("/:id", userControllers.update)
userRouter.delete("/:id", middlewares.verifyAdm, userControllers.destroy)
