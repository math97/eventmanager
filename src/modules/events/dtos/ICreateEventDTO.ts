import { Organizer } from "../../organizers/entities/Organizer";

interface ICreateEventDTO {
  name: string;
  address: string;
  description: string;
  value: number;
  totalTickets: number;
  organizerId: string;
}
interface ICreateEventRequestDTO {
  name: string;
  address: string;
  description: string;
  value: number;
  totalTickets: number;
}

interface ICreateEventRepositoryDTO {
  name: string;
  address: string;
  description: string;
  value: number;
  totalTickets: number;
  organizer: Organizer;
}


export {ICreateEventDTO,ICreateEventRequestDTO,ICreateEventRepositoryDTO}