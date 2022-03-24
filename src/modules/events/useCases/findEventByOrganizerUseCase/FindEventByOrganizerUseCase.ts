import { inject, injectable } from "tsyringe";
import { IOrganizerRepository } from "../../../organizers/repositories/IOrganizerRepository";
import { IEventRepository } from "../../repositories/IEventRepository";

@injectable()
class FindEventByOrganizerUseCase{
  constructor(
    @inject("EventsRepository")
    private eventsRepository:IEventRepository,
    @inject("OrganizersRepository")
    private organizerRepository:IOrganizerRepository){}

    async execute(organizerId:string){
      const organizer = await this.organizerRepository.findById(organizerId);
      const events = await this.eventsRepository.findByOrganizer(organizer);

      return events;
    }
}

export {FindEventByOrganizerUseCase}
