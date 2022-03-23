import { getRepository, Repository } from "typeorm";
import { ICreateEventDTO } from "../../dtos/ICreateEventDTO";
import { Event } from "../../entities/Event";
import { IEventRepository } from "../IEventRepository";

class EventsRepository implements IEventRepository{
  private repository: Repository<Event>;

  constructor() {
    this.repository = getRepository(Event);
  }
  async create({name,description,address,totalTickets,value}: ICreateEventDTO): Promise<void> {
    const event =this.repository.create({name,description,address,totalTickets,value})

    await this.repository.save(event);
  }
}

export {EventsRepository}