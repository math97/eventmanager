import { inject, injectable } from "tsyringe";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";
import { IUserRepository } from "../../repositories/IUserRepository";
import AppError from "../../../../errors/AppError";

interface IRequest {
  email:string,
  password:string,
}

interface IResponse {
  user: {
    email: string;
    name: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository:IUserRepository){ }
  
  async execute({email,password}:IRequest):Promise<IResponse>{
    const user = await this.usersRepository.findByEmail(email);

    if (!user) throw new AppError("Email or password incorrect!");

    const passwordMatch = await compare(password,user.password);

    if (!passwordMatch) throw new AppError("Email or password incorrect!");

    const token = sign({}, "179d1e5dfc5ac8ea3e4f0d4887890e0e", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };
    return tokenReturn;
  }
}

export {AuthenticateUserUseCase};