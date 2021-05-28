import { Request, Response } from "express";
import {SessionService} from "../service/SessionService";
import { UsersRepository } from "../repositories/UsersRepository";
import { User } from "../entities/User";


class SessionController {

  public async  create(request: Request, response: Response): Promise<Response>{
    const { email, password } = request.body;

    const usersRepository = new UsersRepository();
    const createSession = new SessionService(usersRepository);

    const session = await createSession.execute({
      email,
      password,
    });

    return response.status(200).json(session);
  }
}

export { SessionController};
