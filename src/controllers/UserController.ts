import { Request, Response} from "express";
import { CreateUserService } from "../service/CreateUserService";
import { UsersRepository } from "../repositories/UsersRepository";
import { User } from "../entities/User";


class UserController {
  public async create(request:Request, response:Response): Promise<Response>{
    const { name, lastname, nickname, email, password, cpf, birth_date, phone, address, bio} = request.body;

    const usersRepository = new UsersRepository();
    const createUser = new CreateUserService(usersRepository);

    const user = await createUser.execute({
      name,
      lastname,
      nickname,
      email,
      password,
      cpf,
      birth_date,
      phone,
      address,
      bio
    });
    delete user.password;

    return response.status(201).json(user);
  }

  public async listar(request: Request, response: Response): Promise<Response>{

    const usersRepository = new UsersRepository();
    const users = await usersRepository.list();

    return response.status(200).json(users)
  }



}
export { UserController }
