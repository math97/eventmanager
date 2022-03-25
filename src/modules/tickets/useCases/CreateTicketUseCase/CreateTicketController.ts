import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTicketUseCase } from "./CreateTicketUseCase";

class CreateTicketController{
  async handle(request:Request,response:Response){
    const createTicketController = container.resolve(CreateTicketUseCase);

    const {eventId} = request.body;    

    await createTicketController.execute(eventId);

    return response.status(201).send();
  }
};

export {CreateTicketController}