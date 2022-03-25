import { Event } from "../../events/entities/Event";
import { Ticket } from "../entities/Ticket";

interface ITicketRepository{
  create(event:Event):Promise<void>;
  findByEvent(event:Event):Promise<Ticket[]>;
};

export {ITicketRepository};