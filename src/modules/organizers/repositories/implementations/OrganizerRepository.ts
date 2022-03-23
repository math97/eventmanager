import { getRepository, Repository } from "typeorm";
import { ICreateOrganizerDTO } from "../../dtos/ICreateOrganizerDTO";
import { IUpdateOrganizerDTO } from "../../dtos/IUpdateOrganizerDTO";
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

  async findById(id:string):Promise<Organizer> {
    const organizer = await this.repository.findOne(id);

    return organizer!;
  }

  async update({id,cnpj,email,name,password,phoneNumber,corporateName}:IUpdateOrganizerDTO):Promise<Organizer>{
    const organizer = await this.repository.findOne(id);

    if(cnpj) organizer!.cnpj = cnpj;
    if(email) organizer!.email = email;
    if(name) organizer!.name = name;
    if(password) organizer!.password = password;
    if(phoneNumber) organizer!.phoneNumber = phoneNumber;
    if(corporateName) organizer!.corporateName = corporateName;

    await this.repository.save(organizer!);

    return organizer!;
  }

}

export {OrganizersRepository}