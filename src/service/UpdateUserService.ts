import AppError from "../errors/AppError";
import { User } from "../entities/User";
import IUsersRepository from "../repositories/IUsersRepository";


interface IRequest{
  id?: string;
  name: string;
  lastname: string;
  nickname: string;
  email: string;
  cpf: string;
  birth_date: string;
  phone: string;
  address: string;
  bio: string;

}

class UpdateUserService{
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
    cpf,
    birth_date,
    phone,
    address,
    bio

  }: IRequest): Promise<User>{

    const users = await this.usersRepository.findById(id);

    if(!users){
      throw new AppError("User not found!", 400);
    }



    const verifyEmail = await this.usersRepository.findByEmail(email);

    if(verifyEmail){
      throw new AppError("Email already exists!", 400)
    }

    const verifyNickname = await this.usersRepository.findByNickname(nickname);

    if(verifyNickname){
      throw new AppError("Nickname already exists!", 400);

    }

    users.name = name;
    users.lastname = lastname;
    users.nickname = nickname;
    users.email = email;
    users.cpf = cpf;
    users.birth_date = birth_date;
    users.phone = phone;
    users.address = address;
    users.bio = bio;

    await this.usersRepository.save(users);


    return users;



  }

}
export { UpdateUserService }
