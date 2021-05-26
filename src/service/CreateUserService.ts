import { hash } from "bcryptjs";
import { User } from "../entities/User";
import IUsersRepository from "../repositories/IUsersRepository";
import { UsersRepository } from "../repositories/UsersRepository"

interface Request{
  name: string;
  lastname: string;
  nickname: string;
  email: string;
  password: string;
  cpf: string;
  birth_date: string;
  phone: string;
  address: string;
  bio: string;
}

class CreateUserService{
  private usersRepository: IUsersRepository;

  constructor(usersRepository: UsersRepository){
    this.usersRepository = usersRepository;
  }

  public async execute({
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

  }: Request): Promise<User>{
    const passwordHash = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      lastname,
      nickname,
      email,
      password: passwordHash,
      cpf,
      birth_date,
      phone,
      address,
      bio,
    });

    return user;

  }

}

export { CreateUserService }
