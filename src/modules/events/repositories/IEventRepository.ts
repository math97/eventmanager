import { Organizer } from "../../organizers/entities/Organizer";
import { ICreateEventRepositoryDTO } from "../dtos/ICreateEventDTO";
import { Event } from "../entities/Event";


interface IEventRepository {
  create(data:ICreateEventRepositoryDTO):Promise<void>;
  list():Promise<Event[]>;
  findByOrganizer(organizer: Organizer):Promise<Event[]>;
  delete(organizer: Organizer, eventId: string):Promise<void>;
}

export {IEventRepository}