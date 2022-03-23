import { inject, injectable } from "tsyringe";
import { ICreateEventDTO } from "../../dtos/ICreateEventDTO";
import { IEventRepository } from "../../repositories/IEventRepository";

@injectable()
class CreateEventUseCase {
  constructor(
    @inject("EventsRepository")
    private eventsRepository:IEventRepository){ }
  
  async execute({name,address,description,totalTickets,value}:ICreateEventDTO):Promise<void>{
    try {  
      await this.eventsRepository.create({name,address,description,totalTickets,value})
    } catch (error) {
      console.log(error);  
    }
  }
}

export {CreateEventUseCase};