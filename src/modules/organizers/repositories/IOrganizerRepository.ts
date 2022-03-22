import { ICreateOrganizerDTO } from "../dtos/ICreateOrganizerDTO";
import { Organizer } from "../entities/Organizer";

interface IOrganizerRepository {
  create(data:ICreateOrganizerDTO):Promise<void>;
  findByEmail(email:string):Promise<Organizer>;
  findById(id:string):Promise<Organizer>;
}

export {IOrganizerRepository}