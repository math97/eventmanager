import { getRepository, Repository } from "typeorm";
import { Ticket } from "../../entities/Ticket";
import { ITicketRepository } from "../ITicketRepository";

class TicketsRepository implements ITicketRepository{
  private repository: Repository<Ticket>;

  constructor() {
    this.repository = getRepository(Ticket);
  }
};

export {TicketsRepository};