import { Router } from "express";
import middlewares from "../middlewares";
import { categoriesControllers } from "../controllers";

export const categoriesRouter: Router = Router();

categoriesRouter.post("", 
    middlewares.verifyToken, 
    middlewares.verifyAdm,
    categoriesControllers.create 
)
categoriesRouter.get("", categoriesControllers.read)
categoriesRouter.get("/:id/realEstate", categoriesControllers.readByCategory)


