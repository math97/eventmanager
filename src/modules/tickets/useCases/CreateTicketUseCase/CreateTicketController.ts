import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTicketUseCase } from "./CreateTicketUseCase";
class CreateTicketController{
  async handle(request:Request,response:Response,next:NextFunction){
    try {
      const createTicketUseCase = container.resolve(CreateTicketUseCase);

      const userId = request.user.id;
      const {eventId} = request.body;    
  
      await createTicketUseCase.execute({eventId,userId});
  
      return response.status(201).send();
    } catch (error) {
      next(error);
    }
  }
};

export {CreateTicketController}