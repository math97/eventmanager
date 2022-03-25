import { getRepository, QueryFailedError, Repository } from "typeorm";
import AppError from "../../../../errors/AppError";
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
    try {
      const event =this.repository.create({name,description,address,ticketsLimit,value,organizer})
      await this.repository.save(event);
    } catch (error) {
      if(error instanceof QueryFailedError) {
        if(error.driverError.code === '23502') throw new AppError("missing data",400);
        else throw new AppError("Error on insert",400);
      }
      else throw error;
    }
  }
  async list(): Promise<Event[]> {
    const events = await this.repository.find();

    return events;
  }

  async findByOrganizer(organizer: Organizer): Promise<Event[]> {
    const events = await this.repository.find({organizer})

    return events;
  }

  async delete(organizer: Organizer, eventId: string): Promise<void> {
    try {
      const eventExist = await this.repository.findOne({organizer,id:eventId});

      if(eventExist) await this.repository.delete(eventId);   
      else throw new AppError("Event doesn't exist",404);
    } catch (error) {
      if(error instanceof QueryFailedError) {
        if(error.driverError.code === '22P02') throw new AppError("Invalid input",400);
        else throw new AppError("Error on delete",400);
      }
      else throw error;
    }
  }

  async findById(eventId: string): Promise<Event> {
    const event = await this.repository.findOne(eventId);

    if(!event)throw new AppError("Event doesn't exist",404);
    return event;  
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