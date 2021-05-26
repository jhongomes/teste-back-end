import { Request, Response} from "express";
import { CreateUserService } from "../service/CreateUserService";
import { UsersRepository } from "../repositories/UsersRepository";
import { User } from "../entities/User";
import { UpdateUserService } from "../service/UpdateUserService";
import { DeleteUserService } from "../service/DeleteUserService";


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

  public async Update(request: Request, response: Response): Promise<Response>{
    const { id } = request.params;
    const { name,
            lastname,
            nickname,
            email,
            cpf,
            birth_date,
            phone,
            address,
            bio} = request.body;


    const usersRepository = new UsersRepository();
    const updateUser = new UpdateUserService(usersRepository);

    const user = await updateUser.execute({

            name,
            lastname,
            nickname,
            email,
            cpf,
            birth_date,
            phone,
            address,
            bio,
    })

    return response.status(201).json(user);


  }

  public async Delete(request: Request, response: Response): Promise<Response>{
    const { id } = request.params;
    const usersRepository = new UsersRepository();
    const deleteUser = new DeleteUserService(usersRepository);


    const users = await deleteUser.execute({
      id,
    });

    return response.send();
  }



}
export { UserController }
