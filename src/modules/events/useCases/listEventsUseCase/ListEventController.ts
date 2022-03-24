import { Request, Response } from "express";
import { container } from "tsyringe";

import {ListEventUseCase} from "./ListEventUseCase";

class ListEventController {
  async handle(request:Request,response:Response):Promise<Response>{
    const listEventUseCase = container.resolve(ListEventUseCase);

    const events = await listEventUseCase.execute();

    return response.json(events);
  }
};

export {ListEventController}