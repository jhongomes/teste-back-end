import IUsersRepository from "./IUsersRepository";
import ICreateUsersDTO from "../Dtos/CreateUserDTO";
import { User } from "../entities/User";
import {  getRepository, Repository } from "typeorm";


class UsersRepository implements IUsersRepository {

  private ormRepository: Repository<User>;

  constructor(){
    this.ormRepository = getRepository(User);
  }



  public async create({
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
  }: ICreateUsersDTO): Promise<User> {
    const users = this.ormRepository.create({
      name,
      lastname,
      nickname,
      email,
      password,
      cpf,
      birth_date,
      phone,
      address,
      bio,

    });

      await this.ormRepository.save(users);


      return users;
  }


  public async list(): Promise<User[]> {
      return this.ormRepository.find();
  }

  public async save(users: User): Promise<User> {
      return this.ormRepository.save(users);
  }


  public async remove(users: User): Promise<User> {
       return this.ormRepository.remove(users);

  }
  public async findById(id: string): Promise<User | undefined> {
      return this.ormRepository.findOne(id);
  }


  public async findByEmail(email: string): Promise<User | undefined> {
       return this.ormRepository.findOne({
       where: { email }
    })

  }

  public async findByNickname(nickname: string): Promise<User | undefined> {
      return this.ormRepository.findOne({ where: {nickname },
      })



  }


  public async findByCPF(cpf: string): Promise<User | undefined> {
      return this.ormRepository.findOne({ where: { cpf },
      })


  }

}

export { UsersRepository }
