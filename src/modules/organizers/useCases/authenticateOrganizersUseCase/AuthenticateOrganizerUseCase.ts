import { inject, injectable } from "tsyringe";
import { ICreateOrganizerDTO } from "../../dtos/ICreateOrganizerDTO";
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
}

@injectable()
class AuthenticateOrganizerUseCase {
  constructor(
    @inject("OrganizersRepository")
    private organizersRepository:IOrganizerRepository){ }
  
  async execute({email,password}:IRequest):Promise<IResponse>{
    const organizer = await this.organizersRepository.findByEmail(email);

    if (!organizer) throw new Error("Email or password incorrect!");

    const passwordMatch = password === organizer.password ? true:false;

    if (!passwordMatch) throw new Error("Email or password incorrect!");

    const dataReturn: IResponse = {
      organizer: {
        name: organizer.name,
        email: organizer.email,
      },
    };
    return dataReturn;
  }
}

export {AuthenticateOrganizerUseCase};