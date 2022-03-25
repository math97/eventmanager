import {NextFunction, Request,Response} from "express";
import {container} from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

import {CreateUserUseCase} from "./CreateUserUseCase";

class CreateUserController{
  async handle(request:Request,response:Response,next:NextFunction):Promise<Response | undefined>{
    try {
      const data:ICreateUserDTO = request.body
      
      const createUserUseCase = container.resolve(CreateUserUseCase);
      await createUserUseCase.execute({...data});
      return response.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}

export {CreateUserController}