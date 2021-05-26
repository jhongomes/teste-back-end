import express from "express";

import { Router } from "express";
import { usersRouter } from "./user";

const routes = Router();

routes.use("/users", usersRouter);

export { routes };
