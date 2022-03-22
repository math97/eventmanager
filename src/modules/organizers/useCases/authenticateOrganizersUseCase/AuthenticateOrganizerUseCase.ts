import { inject, injectable } from "tsyringe";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";
import { IOrganizerRepository } from "../../repositories/IOrganizerRepository";

interface IRequest {
  email:string,
  password:string,
}

interface IResponse {
  organizer: {
    email: string;
    name: string;
  };
  token: string;
}

@injectable()
class AuthenticateOrganizerUseCase {
  constructor(
    @inject("OrganizersRepository")
    private organizersRepository:IOrganizerRepository){ }
  
  async execute({email,password}:IRequest):Promise<IResponse>{
    const organizer = await this.organizersRepository.findByEmail(email);

    if (!organizer) throw new Error("Email or password incorrect!");

    const passwordMatch = await compare(password,organizer.password);

    if (!passwordMatch) throw new Error("Email or password incorrect!");

    const token = sign({}, "179d1e5dfc5ac8ea3e4f0d4887890e0e", {
      subject: organizer.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      organizer: {
        name: organizer.name,
        email: organizer.email,
      },
    };
    return tokenReturn;
  }
}

export {AuthenticateOrganizerUseCase};