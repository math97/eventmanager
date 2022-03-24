import { Organizer } from "../../organizers/entities/Organizer";

interface ICreateEventDTO {
  name: string;
  address: string;
  description: string;
  value: number;
  ticketsLimit: number;
  organizerId: string;
}
interface ICreateEventRequestDTO {
  name: string;
  address: string;
  description: string;
  value: number;
  ticketsLimit: number;
}

interface ICreateEventRepositoryDTO {
  name: string;
  address: string;
  description: string;
  value: number;
  ticketsLimit: number;
  organizer: Organizer;
}


export {ICreateEventDTO,ICreateEventRequestDTO,ICreateEventRepositoryDTO}