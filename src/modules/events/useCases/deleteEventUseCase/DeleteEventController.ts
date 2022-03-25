import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteEventUseCase } from "./DeleteEventUseCase";

class DeleteEventController{
  async handle(request:Request,response:Response,next:NextFunction):Promise<Response | undefined>{
    try {
      const deleteEventUseCase = container.resolve(DeleteEventUseCase);

      const organizerId = request.organizer.id;
  
      const {eventId} = request.body;
  
      await deleteEventUseCase.execute({organizerId,eventId});
  
      return response.status(200).send("Event removed");
    } catch (error) {
      next(error);
    }
  }
};

export {DeleteEventController}