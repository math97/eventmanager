import { Event } from "../../events/entities/Event";

interface ITicketRepository{
  create(event:Event):Promise<void>;
  
};

export {ITicketRepository};