import { inject, injectable } from "tsyringe";
import AppError from "../../../../errors/AppError";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository:IUserRepository){}
  
  async execute({id,name,cpf,email,password,phoneNumber}:IUpdateUserDTO):Promise<User>{
      const userByEmail = await this.usersRepository.findByEmail(email);
  
      if (userByEmail && userByEmail.id !==id) throw new AppError("Email already taken",400);
  
      const userUpdated = await this.usersRepository.update({id,name,cpf,email,password,phoneNumber})

      return userUpdated!;
  }
}

export {UpdateUserUseCase};