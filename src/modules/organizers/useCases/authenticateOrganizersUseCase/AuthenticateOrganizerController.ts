import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";

import {AuthenticateOrganizerUseCase} from "./AuthenticateOrganizerUseCase";

class AuthenticateOrganizerController {
  async handle(request:Request,response:Response,next:NextFunction):Promise<Response | undefined>{
    try {
      const {email,password} = request.body;

      const authenticateOrganizerUseCase = container.resolve(AuthenticateOrganizerUseCase);
  
      const authenticateOrganizer = await authenticateOrganizerUseCase.execute({email,password});
  
      return response.json({authenticateOrganizer});
    } catch (error) {
      next(error);
    }
  }
};

export {AuthenticateOrganizerController}