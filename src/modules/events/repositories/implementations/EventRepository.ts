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
  async create({organizer,name,description,address,ticketsLimit,value}: ICreateEventRepositoryDTO): Promise<void> {
    
    const event =this.repository.create({name,description,address,ticketsLimit,value,organizer})

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

  async delete(organizer: Organizer, eventId: string): Promise<void> {
    const eventExist = await this.repository.findOne({organizer,id:eventId});

    if(eventExist) await this.repository.delete(eventId);   
    else throw new Error("Event doesn't exist");
  }

  async findById(eventId: string): Promise<Event> {
    const event = await this.repository.findOne(eventId);

    if(event) return event;
    else throw new Error("Event doesn't exist");  
  }

  async updatedTicketSold(eventId: string):Promise<Event> {
    const event = await this.repository.findOne(eventId);

    if(!event) throw new Error("Event not found");

    event.ticketsSold =+ event.ticketsSold + 1;

    await this.repository.save(event);

    return event;
  }
}

export {EventsRepository}