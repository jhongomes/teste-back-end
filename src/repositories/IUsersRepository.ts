import { User } from "../entities/User";
import CreateUserDTO  from "../Dtos/CreateUserDTO";

export default interface IUserRepository {
  create(CreateUserDTO: CreateUserDTO): Promise<User>;
  list(): Promise<User[]>;
  save(users: User): Promise<User>
  remove(users: User): Promise<User>;
  findById(id: string): Promise<User | undefined>
  findByEmail(email: string): Promise<User | undefined>;
  findByNickname(nickname: string): Promise<User | undefined>;
  findByCPF(cpf: string): Promise<User | undefined>;


}
