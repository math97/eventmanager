import { inject, injectable } from "tsyringe";
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
  
  async execute({name,address,description,totalTickets,value,organizerId}:ICreateEventDTO):Promise<void>{
    try {  
      
      const organizer = await this.organizersRepository.findById(organizerId);      

      await this.eventsRepository.create({name,address,description,totalTickets,value,organizer})

    } catch (error) {
      console.log(error);  
    }
  }
}

export {CreateEventUseCase};