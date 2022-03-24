import { ICreateEventRepositoryDTO } from "../dtos/ICreateEventDTO";
import { Event } from "../entities/Event";


interface IEventRepository {
  create(data:ICreateEventRepositoryDTO):Promise<void>;
  list():Promise<Event[]>;
}

export {IEventRepository}