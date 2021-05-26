import AppError from "../errors/AppError";
import { User } from "../entities/User";
import IUsersRepository from "../repositories/IUsersRepository";


interface IRequest {
  id: string;
}

class DeleteUserService {
  private usersRepository : IUsersRepository;

  constructor(usersRepository: IUsersRepository){
    this.usersRepository = usersRepository;

  }

  public async execute({ id }: IRequest): Promise<User>{

  const users = await this.usersRepository.findById(id);

  if(!users){
    throw new AppError("User not found!", 400);

  }

  await this.usersRepository.remove(users)


  return users;
  }

}
export { DeleteUserService }
