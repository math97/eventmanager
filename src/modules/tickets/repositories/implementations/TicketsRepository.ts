import { getRepository, Repository } from "typeorm";
import { Event } from "../../../events/entities/Event";
import { Ticket } from "../../entities/Ticket";
import { ITicketRepository } from "../ITicketRepository";

class TicketsRepository implements ITicketRepository{
  private repository: Repository<Ticket>;

  constructor() {
    this.repository = getRepository(Ticket);
  }

  async create(event: Event): Promise<void> {
    const ticket = this.repository.create({event})

    await this.repository.save(ticket);
  }
};

export {TicketsRepository};