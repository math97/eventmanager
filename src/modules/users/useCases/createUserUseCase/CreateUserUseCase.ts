import {hash} from "bcryptjs";
import { inject, injectable } from "tsyringe";
import AppError from "../../../../errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository:IUserRepository){ }
  
  async execute({name,cpf,email,password,phoneNumber}:ICreateUserDTO):Promise<void>{
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) throw new AppError("User already exists");

    const passwordHash = await hash(password, 8);
    await this.usersRepository.create({name,cpf,email,password:passwordHash,phoneNumber})
  }
}

export {CreateUserUseCase};