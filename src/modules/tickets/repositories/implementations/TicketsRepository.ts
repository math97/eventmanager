import { getRepository, Repository } from "typeorm";
import { Event } from "../../../events/entities/Event";
import { User } from "../../../users/entities/User";
import { Ticket } from "../../entities/Ticket";
import { ITicketRepository } from "../ITicketRepository";

class TicketsRepository implements ITicketRepository{
  private repository: Repository<Ticket>;

  constructor() {
    this.repository = getRepository(Ticket);
  }

  async create(event: Event,user:User): Promise<void> {
    const ticket = this.repository.create({event,user})

    await this.repository.save(ticket);
  };
  async findByEvent(event: Event): Promise<Ticket[]> {
    const tickets = await this.repository.find(
      {
        relations:['event'],
        where:{event:{id:event.id}}
    });
    
    return tickets;
  };
  async findByUser(user: User): Promise<Ticket[]> {
    const tickets = await this.repository.find(
      {
        relations:['users'],
        where:{user:{id:user.id}}
    });
    
    return tickets;
  }
};

export {TicketsRepository};