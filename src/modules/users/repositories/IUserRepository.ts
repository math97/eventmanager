import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO";
import { User } from "../entities/User";

interface IUserRepository {
  create(data:ICreateUserDTO):Promise<void>;
  findByEmail(email:string):Promise<User | undefined>;
  findById(id:string):Promise<User | undefined>;
  update(data:IUpdateUserDTO):Promise<User>;
}

export {IUserRepository}