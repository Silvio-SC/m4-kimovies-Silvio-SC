import { Router } from "express";
import { loginServices } from "../services";

export const loginRouter: Router = Router();

loginRouter.post("", loginServices.login)