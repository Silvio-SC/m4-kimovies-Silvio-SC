import { Router } from "express";
import middlewares from "../middlewares";
import { realEstateControllers } from "../controllers";

export const realEstateRouter: Router = Router();

realEstateRouter.post("", 
    middlewares.verifyToken, 
    middlewares.verifyAdm,
    realEstateControllers.create
) // verificação de endereço
realEstateRouter.get("", realEstateControllers.read)