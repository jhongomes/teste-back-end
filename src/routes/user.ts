import { Router } from "express";

import { UserController} from "../controllers/UserController";

const usersRouter = Router();
const usersController = new UserController();


usersRouter.post("/", usersController.create);
usersRouter.get("/", usersController.listar);
usersRouter.get("/:email", usersController.findByEmail);
usersRouter.put("/:id", usersController.Update);
usersRouter.delete("/:id", usersController.Delete);



export { usersRouter}
