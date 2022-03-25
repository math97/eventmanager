import {hash} from "bcryptjs";
import { inject, injectable } from "tsyringe";
import AppError from "../../../../errors/AppError";
import { ICreateOrganizerDTO } from "../../dtos/ICreateOrganizerDTO";
import { IOrganizerRepository } from "../../repositories/IOrganizerRepository";

@injectable()
class CreateOrganizerUseCase {
  constructor(
    @inject("OrganizersRepository")
    private organizersRepository:IOrganizerRepository){ }
  
  async execute({name,businessType="empresa",cnpj,corporateName,email,password,phoneNumber}:ICreateOrganizerDTO):Promise<void>{
    const organizerAlreadyExists = await this.organizersRepository.findByEmail(email);

    if (organizerAlreadyExists) throw new AppError("Organizer already exists",400);

    const passwordHash = await hash(password, 8);
    await this.organizersRepository.create({name,businessType,cnpj,corporateName,email,password:passwordHash,phoneNumber});
  }
}

export {CreateOrganizerUseCase};