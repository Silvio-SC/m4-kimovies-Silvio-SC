import { Router } from "express";
import middlewares from "../middlewares";

export const realEstateRouter: Router = Router();

realEstateRouter.post("", 
    middlewares.verifyToken, 
    middlewares.verifyAdm 
) // verificação de endereço
realEstateRouter.get("", )