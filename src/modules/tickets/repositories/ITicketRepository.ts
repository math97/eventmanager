import { Event } from "../../events/entities/Event";
import { User } from "../../users/entities/User";
import { Ticket } from "../entities/Ticket";

interface ITicketRepository{
  create(event:Event,user:User):Promise<void>;
  findByEvent(event:Event):Promise<Ticket[]>;
  findByUser(user:User):Promise<Ticket[]>;
};

export {ITicketRepository};