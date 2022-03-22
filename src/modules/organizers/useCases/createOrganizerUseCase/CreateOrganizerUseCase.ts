import {hash} from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { ICreateOrganizerDTO } from "../../dtos/ICreateOrganizerDTO";
import { IOrganizerRepository } from "../../repositories/IOrganizerRepository";

@injectable()
class CreateOrganizerUseCase {
  constructor(
    @inject("OrganizersRepository")
    private organizersRepository:IOrganizerRepository){ }
  
  async execute({name,businessType="empresa",cnpj,corporateName,email,password,phoneNumber}:ICreateOrganizerDTO):Promise<void>{
    try {
      
      const organizerAlreadyExists = await this.organizersRepository.findByEmail(email);
  
      if (organizerAlreadyExists) throw new Error("Organizer already exists");
  
      const passwordHash = await hash(password, 8);
      await this.organizersRepository.create({name,businessType,cnpj,corporateName,email,password:passwordHash,phoneNumber})
    } catch (error) {
      console.log(error);
      
    }
  }
}

export {CreateOrganizerUseCase};