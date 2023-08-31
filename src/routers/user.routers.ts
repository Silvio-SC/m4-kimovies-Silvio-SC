import { Router } from "express";
import { userControllers } from "../controllers";
import middlewares from "../middlewares";

export const userRouter: Router = Router();

userRouter.post("", userControllers.create)
userRouter.get("", userControllers.read)
userRouter.patch("/:id", )
userRouter.delete("/:id", middlewares.idExists, userControllers.destroy)
