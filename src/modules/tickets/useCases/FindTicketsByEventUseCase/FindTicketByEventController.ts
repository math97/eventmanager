import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindTicketsByEventUseCase } from "./FindTicketByEventUseCase";

class FindTicketsByEventController{
  async handle(request:Request,response:Response):Promise<Response>{
    const findTicketsByEventUseCase = container.resolve(FindTicketsByEventUseCase);
    
    const {eventId} = request.query;
    
    if(!eventId || typeof eventId != "string") throw new Error("eventId not sent");

    const tickets = await findTicketsByEventUseCase.execute(eventId);

    return response.json(tickets);
  }
};

export {FindTicketsByEventController}