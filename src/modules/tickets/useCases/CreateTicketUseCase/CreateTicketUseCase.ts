import { inject, injectable } from "tsyringe";
import { IEventRepository } from "../../../events/repositories/IEventRepository";
import { ITicketRepository } from "../../repositories/ITicketRepository";

@injectable()
class CreateTicketUseCase{
  constructor(
    @inject("TicketsRepository")
    private ticketsRepository:ITicketRepository,
    @inject("EventsRepository")
    private eventsRepository:IEventRepository,
    ){}
;
    async execute(eventId:string):Promise<void>{
      const event = await this.eventsRepository.updatedTicketSold(eventId);

      await this.ticketsRepository.create(event);
    }
};

export {CreateTicketUseCase};