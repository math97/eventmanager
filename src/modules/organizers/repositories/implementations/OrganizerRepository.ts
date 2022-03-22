import { getRepository, Repository } from "typeorm";
import { ICreateOrganizerDTO } from "../../dtos/ICreateOrganizerDTO";
import { Organizer } from "../../entities/Organizer";
import { IOrganizerRepository } from "../IOrganizerRepository";

class OrganizersRepository implements IOrganizerRepository{
  private repository: Repository<Organizer>;

  constructor() {
    this.repository = getRepository(Organizer);
  }

  async create({name,cnpj,email,password,phoneNumber,businessType,corporateName}: ICreateOrganizerDTO):Promise<void> {
    const organizer =this.repository.create({name,cnpj,email,password,phoneNumber,businessType,corporateName})

    await this.repository.save(organizer);
  }
  async findByEmail(email: string): Promise<Organizer> {
    const organizer = await this.repository.findOne({email});

    return organizer!;
  }

}

export {OrganizersRepository}