import {NextFunction, Request,Response} from "express";
import {container} from "tsyringe";
import { ICreateEventRequestDTO } from "../../dtos/ICreateEventDTO";

import {CreateEventUseCase} from "./CreateEventUseCase";

class CreateEventController{
  async handle(request:Request,response:Response,next:NextFunction):Promise<Response | undefined>{
    try {
      const createEventData:ICreateEventRequestDTO = request.body
      const createEventUseCase = container.resolve(CreateEventUseCase);
  
      const organizerId = request.organizer.id;
  
      await createEventUseCase.execute({...createEventData,organizerId});
  
      return response.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}
export {CreateEventController}