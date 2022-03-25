import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";

import {AuthenticateUserUseCase} from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request:Request,response:Response,next:NextFunction):Promise<Response | undefined>{
    try { 
      const {email,password} = request.body;
  
      const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);
  
      const authenticateUser = await authenticateUserUseCase.execute({email,password});
  
      return response.json({authenticateUser});
    } catch (error) {
      next(error);
    }
  }
};

export {AuthenticateUserController}