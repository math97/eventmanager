import {Request,Response} from "express";
import {container} from "tsyringe";
import { ICreateOrganizerDTO } from "../../dtos/ICreateOrganizerDTO";

import {CreateOrganizerUseCase} from "./CreateOrganizerUseCase";

class CreateOrganizerController{
  async handle(request:Request,response:Response):Promise<Response>{
    const data:ICreateOrganizerDTO = request.body
    const createOrganizerUseCase = container.resolve(CreateOrganizerUseCase);

    await createOrganizerUseCase.execute({...data});

    return response.status(201).send();

  }
}

export {CreateOrganizerController}