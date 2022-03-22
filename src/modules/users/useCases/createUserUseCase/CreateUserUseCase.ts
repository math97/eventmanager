import {hash} from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository:IUserRepository){ }
  
  async execute({name,cpf,email,password,phoneNumber}:ICreateUserDTO):Promise<void>{
    try {
      
      const userAlreadyExists = await this.usersRepository.findByEmail(email);
  
      if (userAlreadyExists) throw new Error("User already exists");
  
      const passwordHash = await hash(password, 8);
      await this.usersRepository.create({name,cpf,email,password:passwordHash,phoneNumber})
    } catch (error) {
      console.log(error);
      
    }
  }
}

export {CreateUserUseCase};