import {NextFunction, Request,Response} from "express";
import {container} from "tsyringe";
import { IUpdateOrganizerDTO } from "../../dtos/IUpdateOrganizerDTO";

import {UpdateOrganizerUseCase} from "./UpdateOrganizerUseCase";

class UpdateOrganizerController{
  async handle(request:Request,response:Response,next:NextFunction):Promise<Response | undefined>{
    try {
      const {cnpj,email,name,password,phoneNumber,corporateName}:IUpdateOrganizerDTO = request.body
      const updateOrganizerUseCase = container.resolve(UpdateOrganizerUseCase);
  
      await updateOrganizerUseCase.execute({id:request.organizer.id,cnpj,email,name,password,phoneNumber,corporateName});
  
      return response.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}

export {UpdateOrganizerController}