import {NextFunction, Request,Response} from "express";
import {container} from "tsyringe";
import { ICreateOrganizerDTO } from "../../dtos/ICreateOrganizerDTO";

import {CreateOrganizerUseCase} from "./CreateOrganizerUseCase";

class CreateOrganizerController{
  async handle(request:Request,response:Response,next:NextFunction):Promise<Response | undefined>{
    try {
      const data:ICreateOrganizerDTO = request.body
      const createOrganizerUseCase = container.resolve(CreateOrganizerUseCase);
  
      await createOrganizerUseCase.execute({...data});
  
      return response.status(201).send();
  
    } catch (error) {
      next(error);
    }
  }
}

export {CreateOrganizerController}