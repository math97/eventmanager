import { getRepository, Repository } from "typeorm";
import { Organizer } from "../../../organizers/entities/Organizer";
import {  ICreateEventRepositoryDTO } from "../../dtos/ICreateEventDTO";
import { Event } from "../../entities/Event";
import { IEventRepository } from "../IEventRepository";

class EventsRepository implements IEventRepository{
  private repository: Repository<Event>;

  constructor() {
    this.repository = getRepository(Event);
  }
  async create({organizer,name,description,address,totalTickets,value}: ICreateEventRepositoryDTO): Promise<void> {
    
    const event =this.repository.create({name,description,address,totalTickets,value,organizer})

    await this.repository.save(event);
  }
  async list(): Promise<Event[]> {
    const events =await this.repository.find();

    return events;
  }

  async findByOrganizer(organizer: Organizer): Promise<Event[]> {
    const events = await this.repository.find({organizer})

    return events;
  }
}

export {EventsRepository}