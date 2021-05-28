import { hash } from "bcryptjs";
import { User } from "../entities/User";
import AppError from "../errors/AppError";
import IUsersRepository from "../repositories/IUsersRepository";
import { UsersRepository } from "../repositories/UsersRepository"

interface Request{
  id: string;
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
  private usersRepository : IUsersRepository;

  constructor(usersRepository: IUsersRepository){
    this.usersRepository = usersRepository;

  }

  public async execute({
    id,
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
  }:Request): Promise<User>{
    const passwordHash = await hash(password, 8);

    const users = await this.usersRepository.findById(id);

    if(users){
      throw new AppError("User alredy exists!", 400);
    }



    const verifyEmail = await this.usersRepository.findByEmail(email);

    if(verifyEmail){
      throw new AppError("Email already exists!", 400)
    }

    const verifyNickname = await this.usersRepository.findByNickname(nickname);

    if(verifyNickname){
      throw new AppError("Nickname already exists!", 400);

    }

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
    bio
    });

    return user;

  }

}

export { CreateUserService }
