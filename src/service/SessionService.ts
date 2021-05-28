import { compare } from "bcryptjs";
import { response } from "express";
import { sign } from "jsonwebtoken";
import AppError from "../errors/AppError";
import  { User } from "../entities/User";

import IUsersRepository from "../repositories/IUsersRepository";
import { UsersRepository } from "../repositories/UsersRepository";


interface IRequest{
  email: string;
  password: string;
}

interface IResponse{
  token: string;
  user: User;
}

class SessionService {
  private usersRepository: IUsersRepository;


  constructor(usersRepository: IUsersRepository){
    this.usersRepository = usersRepository;

  }

  public async execute({ email, password}: IRequest): Promise<IResponse>{

    const user = await this.usersRepository.findByEmail(email);

    if(!user){
      throw new AppError("Email or Password invalid!", 401)

    }
    const passwordCompare = await compare(password, user.password as string);

    if(!passwordCompare){
      throw new AppError("Email or Password invalid!", 401)

    }

    const token = sign({}, process.env.APP_SECRET as string, {
      expiresIn: "15m",
    });

    delete user.password;

    return {
      token,
      user,
    };
  }

}
export { SessionService };
