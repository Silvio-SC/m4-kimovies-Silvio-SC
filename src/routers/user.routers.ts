import { Router } from "express";
import { userControllers } from "../controllers";
import middlewares from "../middlewares";

export const userRouter: Router = Router();

userRouter.post("", userControllers.create)
userRouter.get("", userControllers.read) // Tem que ter Token

userRouter.use("/:id", middlewares.idExists)

userRouter.patch("/:id", userControllers.update) // Tem que ter Token
userRouter.delete("/:id", userControllers.destroy) // Tem que ter Token
