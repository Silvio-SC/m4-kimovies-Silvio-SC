import { Router } from "express";
import middlewares from "../middlewares";
import { schedulesControllers } from "../controllers";

export const schedulesRouter: Router = Router();

schedulesRouter.use("", middlewares.verifyToken)
schedulesRouter.post("", schedulesControllers.create)
schedulesRouter.get("/realEstate/:id", middlewares.verifyAdm, schedulesControllers.read )