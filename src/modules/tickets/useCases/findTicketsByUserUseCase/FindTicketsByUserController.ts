import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { FindTicketsByUserUseCase } from "./FindTicketsByUserUseCase";

class FindTicketsByUserController{
  async handle(request:Request,response:Response,next:NextFunction):Promise<Response | undefined>{
    try {
      const findTicketsByUserUseCase = container.resolve(FindTicketsByUserUseCase);
    
      const userId = request.user.id;
  
      const tickets = await findTicketsByUserUseCase.execute(userId);
  
      return response.json(tickets);
    } catch (error) {
      next(error);
    }
  }
};

export {FindTicketsByUserController}