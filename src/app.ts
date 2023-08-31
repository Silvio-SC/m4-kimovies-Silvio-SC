import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { categoriesRouter, loginRouter, realEstateRouter, schedulesRouter, userRouter } from './routers';
import { handleErrors } from './middlewares/handleErrors.middleware';

const app = express();
app.use(express.json());

app.use("/users", userRouter)
app.use("/login", loginRouter)
app.use("/categories", categoriesRouter)
app.use("/realEstate", realEstateRouter)
app.use("/schedules", schedulesRouter)

app.use(handleErrors)

export default app;
