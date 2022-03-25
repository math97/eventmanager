import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { FindEventByOrganizerUseCase } from "./FindEventByOrganizerUseCase";

class FindEventByOrganizeController {
  async handle(request:Request,response:Response,next:NextFunction){
    try {
      const findEventByOrganizerUseCase = container.resolve(FindEventByOrganizerUseCase);

      const organizerId = request.organizer.id;
  
      const events = await findEventByOrganizerUseCase.execute(organizerId);
  
      return response.json(events);
    } catch (error) {
      next(error);
    }

  }
}

export { FindEventByOrganizeController }