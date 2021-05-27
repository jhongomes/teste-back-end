import { hash } from "bcryptjs";
import { User } from "../entities/User";
import AppError from "../errors/AppError";
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




    const verifyEmail = await this.usersRepository.findByEmail(email);

    if(verifyEmail){
      throw new AppError("Email already exists!", 400)
    }

    const verifyNickname = await this.usersRepository.findByNickname(nickname);

    if(verifyNickname){
      throw new AppError("Nickname already exists!", 400);

    }

    const verifyCpf = await this.usersRepository.findByCPF(cpf);

    if(verifyCpf){
      throw new AppError("Cpf already exists!", 400);
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
      bio,
    });

    return user;

  }

}

export { CreateUserService }
