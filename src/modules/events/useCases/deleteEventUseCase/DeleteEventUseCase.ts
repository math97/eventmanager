import { inject, injectable } from "tsyringe";
import { IOrganizerRepository } from "../../../organizers/repositories/IOrganizerRepository";
import { IDeleteEventDTO } from "../../dtos/IDeleteEventDTO";
import { IEventRepository } from "../../repositories/IEventRepository";

@injectable()
class DeleteEventUseCase{
  constructor(
    @inject("EventsRepository")
    private eventsRepository: IEventRepository,
    @inject("OrganizersRepository")
    private organizersRepository: IOrganizerRepository
  ){};

  async execute({organizerId,eventId}:IDeleteEventDTO):Promise<void>{
    const organizer = await this.organizersRepository.findById(organizerId);

    await this.eventsRepository.delete(organizer,eventId);
  }
};

export {DeleteEventUseCase}