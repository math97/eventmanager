import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindEventByOrganizerUseCase } from "./FindEventByOrganizerUseCase";

class FindEventByOrganizeController {
  async handle(request:Request,response:Response){
    const findEventByOrganizerUseCase = container.resolve(FindEventByOrganizerUseCase);

    const organizerId = request.organizer.id;

    const events = await findEventByOrganizerUseCase.execute(organizerId);

    return response.json(events);
  }
}

export { FindEventByOrganizeController }