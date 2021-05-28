import express from "express";

import { Router } from "express";
import { usersRouter } from "./user";
import { sessionRouter } from "./session";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionRouter )

export { routes };
