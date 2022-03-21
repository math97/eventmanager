import { inject, injectable } from "tsyringe";
import { ICreateOrganizerDTO } from "../../dtos/ICreateOrganizerDTO";
import { IOrganizerRepository } from "../../repositories/IOrganizerRepository";

@injectable()
class CreateOrganizerUseCase {
  constructor(
    @inject("OrganizersRepository")
    private organizersRepository:IOrganizerRepository){ }
  
  async execute({name,businessType="empresa",cnpj,corporateName,email,password,phoneNumber}:ICreateOrganizerDTO):Promise<void>{
    await this.organizersRepository.create({name,businessType,cnpj,corporateName,email,password,phoneNumber})
  }
}

export {CreateOrganizerUseCase};