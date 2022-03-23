import { inject, injectable } from "tsyringe";
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
  
      if (isAnotherOrganizer) throw new Error("Email already taken");
  
      const organizerUpdated = await this.organizersRepository.update({id,name,cnpj,email,password,phoneNumber,corporateName})

      return organizerUpdated!;

  }
}

export {UpdateOrganizerUseCase};