import {NextFunction, Request,Response} from "express";
import {container} from "tsyringe";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";

import {UpdateUserUseCase} from "./UpdateUserUseCase";

class UpdateUserController{
  async handle(request:Request,response:Response,next:NextFunction):Promise<Response | undefined>{
    try {      
      const {cpf,email,name,password,phoneNumber}:IUpdateUserDTO = request.body
      const updateUserUseCase = container.resolve(UpdateUserUseCase);
  
      await updateUserUseCase.execute({id:request.user.id,cpf,email,name,password,phoneNumber});
  
      return response.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}

export {UpdateUserController}