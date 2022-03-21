import { ICreateOrganizerDTO } from "../dtos/ICreateOrganizerDTO";

interface IOrganizerRepository {
  create(data:ICreateOrganizerDTO):Promise<void>;
}

export {IOrganizerRepository}