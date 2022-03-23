import { inject, injectable } from "tsyringe";
import { Event } from "../../entities/Event";
import { IEventRepository } from "../../repositories/IEventRepository";

@injectable()
class ListEventUseCase {
  constructor(
    @inject("EventsRepository")
    private eventsRepository:IEventRepository){}

  async execute():Promise<Event[]>{
    const events = await this.eventsRepository.list();

    return events;
  }
  
}

export {ListEventUseCase};