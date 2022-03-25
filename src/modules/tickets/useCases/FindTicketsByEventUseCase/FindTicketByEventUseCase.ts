import { inject, injectable } from "tsyringe";
import { IEventRepository } from "../../../events/repositories/IEventRepository";
import { Ticket } from "../../entities/Ticket";
import { ITicketRepository } from "../../repositories/ITicketRepository";

@injectable()
class FindTicketsByEventUseCase{
  constructor(
    @inject("TicketsRepository")
    private ticketRepository:ITicketRepository,
    @inject("EventsRepository")
    private eventsRepository:IEventRepository
    ){};
  
    async execute(eventId:string):Promise<Ticket[]>{
      const event = await this.eventsRepository.findById(eventId); 

      const tickets = await this.ticketRepository.findByEvent(event);

      return tickets;
    }
};
export {FindTicketsByEventUseCase}