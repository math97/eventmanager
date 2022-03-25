import { inject, injectable } from "tsyringe";
import AppError from "../../../../errors/AppError";
import { IUpdateOrganizerDTO } from "../../dtos/IUpdateOrganizerDTO";
import { Organizer } from "../../entities/Organizer";
import { IOrganizerRepository } from "../../repositories/IOrganizerRepository";

@injectable()
class UpdateOrganizerUseCase {
  constructor(
    @inject("OrganizersRepository")
    private organizersRepository:IOrganizerRepository){}
  
  async execute({id,name,cnpj,email,password,phoneNumber,corporateName}:IUpdateOrganizerDTO):Promise<Organizer>{
      const isAnotherOrganizer = await this.organizersRepository.findByEmail(email);
  
      if (isAnotherOrganizer && isAnotherOrganizer.id === id) throw new AppError("Email already taken");
  
      const organizerUpdated = await this.organizersRepository.update({id,name,cnpj,email,password,phoneNumber,corporateName})

      return organizerUpdated!;

  }
}

export {UpdateOrganizerUseCase};