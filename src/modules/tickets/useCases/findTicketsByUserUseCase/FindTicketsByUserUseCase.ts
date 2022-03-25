import { inject, injectable } from "tsyringe";
import { Ticket } from "../../entities/Ticket";
import { IUserRepository } from "../../../users/repositories/IUserRepository";
import { ITicketRepository } from "../../repositories/ITicketRepository";
import AppError from "../../../../errors/AppError";

@injectable()
class FindTicketsByUserUseCase{
  constructor(
    @inject("TicketsRepository")
    private ticketRepository:ITicketRepository,
    @inject("UsersRepository")
    private usersRepository:IUserRepository
    ){};
  
    async execute(userId:string):Promise<Ticket[]>{
      const user = await this.usersRepository.findById(userId); 

      if(!user) throw new AppError("user not found");

      const tickets = await this.ticketRepository.findByUser(user);

      return tickets;
    }
};

export {FindTicketsByUserUseCase}