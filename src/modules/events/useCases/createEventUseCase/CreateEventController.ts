import {Request,Response} from "express";
import {container} from "tsyringe";
import { ICreateEventDTO } from "../../dtos/ICreateEventDTO";

import {CreateEventUseCase} from "./CreateEventUseCase";

class CreateEventController{
  async handle(request:Request,response:Response):Promise<Response>{
    const data:ICreateEventDTO = request.body
    const createEventUseCase = container.resolve(CreateEventUseCase);

    await createEventUseCase.execute({...data});

    return response.status(201).send();
  }
}



export {CreateEventController}