import { inject, injectable } from "tsyringe";
import AppError from "../../../../errors/AppError";
import { IOrganizerRepository } from "../../../organizers/repositories/IOrganizerRepository";
import { ICreateEventDTO } from "../../dtos/ICreateEventDTO";
import { IEventRepository } from "../../repositories/IEventRepository";
@injectable()
class CreateEventUseCase {
  constructor(
    @inject("EventsRepository")
    private eventsRepository:IEventRepository,
    @inject("OrganizersRepository")
    private organizersRepository:IOrganizerRepository){ }
  
  async execute({name,address,description,ticketsLimit,value,organizerId}:ICreateEventDTO):Promise<void>{      
      const organizer = await this.organizersRepository.findById(organizerId);  
      
      if(!organizer) throw new AppError("Organizer not found",401);

      await this.eventsRepository.create({name,address,description,ticketsLimit,value,organizer})
  }
}

export {CreateEventUseCase};