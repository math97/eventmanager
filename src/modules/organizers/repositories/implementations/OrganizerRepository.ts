import { getRepository, Repository } from "typeorm";
import { ICreateOrganizerDTO } from "../../dtos/ICreateOrganizerDTO";
import { Organizer } from "../../entities/Organizer";
import { IOrganizerRepository } from "../IOrganizerRepository";

class OrganizerRepository implements IOrganizerRepository{
  private repository: Repository<Organizer>;

  constructor() {
    this.repository = getRepository(Organizer);
  }
  async create({name,cnpj,email,password,phoneNumber,businessType="empresa",corporateName}: ICreateOrganizerDTO):Promise<void> {
    const organizer =this.repository.create({name,cnpj,email,password,phoneNumber,businessType,corporateName})

    await this.repository.save(organizer);
  }

}

export {OrganizerRepository}