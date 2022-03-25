import { ICreateOrganizerDTO } from "../dtos/ICreateOrganizerDTO";
import { IUpdateOrganizerDTO } from "../dtos/IUpdateOrganizerDTO";
import { Organizer } from "../entities/Organizer";

interface IOrganizerRepository {
  create(data:ICreateOrganizerDTO):Promise<void>;
  findByEmail(email:string):Promise<Organizer | undefined>;
  findById(id:string):Promise<Organizer>;
  update(data:IUpdateOrganizerDTO):Promise<Organizer>;
}

export {IOrganizerRepository}