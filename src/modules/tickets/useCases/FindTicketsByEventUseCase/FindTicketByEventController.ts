import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import AppError from "../../../../errors/AppError";
import { FindTicketsByEventUseCase } from "./FindTicketByEventUseCase";

class FindTicketsByEventController{
  async handle(request:Request,response:Response,next:NextFunction):Promise<Response | undefined>{
    try {
      const findTicketsByEventUseCase = container.resolve(FindTicketsByEventUseCase);
    
      const {eventId} = request.query;
      
      if(!eventId || typeof eventId != "string") throw new AppError("eventId not sent or invalid",400);

      const tickets = await findTicketsByEventUseCase.execute(eventId);

      return response.json(tickets);
    } catch (error) {
      next(error);
    }
  }
};
export {FindTicketsByEventController}