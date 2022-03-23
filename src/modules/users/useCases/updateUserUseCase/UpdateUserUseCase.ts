import { inject, injectable } from "tsyringe";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository:IUserRepository){}
  
  async execute({id,name,cpf,email,password,phoneNumber}:IUpdateUserDTO):Promise<User>{
      const isAnotherUser = await this.usersRepository.findByEmail(email);
  
      if (isAnotherUser) throw new Error("Email already taken");
  
      const userUpdated = await this.usersRepository.update({id,name,cpf,email,password,phoneNumber})

      return userUpdated!;

  }
}

export {UpdateUserUseCase};