import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindTicketsByUserUseCase } from "./FindTicketsByUserUseCase";

class FindTicketsByUserController{
  async handle(request:Request,response:Response):Promise<Response>{
    const findTicketsByUserUseCase = container.resolve(FindTicketsByUserUseCase);
    
    const userId = request.user.id;

    const tickets = await findTicketsByUserUseCase.execute(userId);

    return response.json(tickets);
  }
};

export {FindTicketsByUserController}