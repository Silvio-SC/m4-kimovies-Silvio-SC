import { Router } from "express";
import middlewares from "../middlewares";

export const schedulesRouter: Router = Router();

schedulesRouter.use("", middlewares.verifyToken)
schedulesRouter.post("", ) //verificar data e hora -> se tem 2 no mesmo horario,
// se é de 8 - 18, se é de seg a sex
schedulesRouter.get("/realEstate/:id", middlewares.verifyAdm )