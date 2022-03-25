import { inject, injectable } from "tsyringe";
import AppError from "../../../../errors/AppError";
import { IEventRepository } from "../../../events/repositories/IEventRepository";
import { IUserRepository } from "../../../users/repositories/IUserRepository";
import { ICreateTicketDTO } from "../../dtos/ICreateTicketDTO";
import { ITicketRepository } from "../../repositories/ITicketRepository";

@injectable()
class CreateTicketUseCase{
  constructor(
    @inject("TicketsRepository")
    private ticketsRepository:ITicketRepository,
    @inject("EventsRepository")
    private eventsRepository:IEventRepository,
    @inject("UsersRepository")
    private usersRepository:IUserRepository,
    ){}
;
    async execute({eventId,userId}:ICreateTicketDTO):Promise<void>{
      const event = await this.eventsRepository.updatedTicketSoldOnEvent(eventId);
      const user = await this.usersRepository.findById(userId);

      if(!user)throw new AppError("User don't exist",401);

      await this.ticketsRepository.create(event,user);
    }
};

export {CreateTicketUseCase};