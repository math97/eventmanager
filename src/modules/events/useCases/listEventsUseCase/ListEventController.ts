import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";

import {ListEventUseCase} from "./ListEventUseCase";

class ListEventController {
  async handle(request:Request,response:Response,next:NextFunction):Promise<Response | undefined>{
    try {
      const listEventUseCase = container.resolve(ListEventUseCase);
      const events = await listEventUseCase.execute();
  
      return response.json(events);
    } catch (error) {
      next(error);
    }
  }
};
export {ListEventController}