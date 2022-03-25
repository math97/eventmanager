import { Router } from "express";

import { CreateTicketController } from "../modules/tickets/useCases/CreateTicketUseCase/CreateTicketController";
import { FindTicketsByEventController } from "../modules/tickets/useCases/FindTicketsByEventUseCase/FindTicketByEventController";

import {ensureUserAuthenticated} from "../middlewares/ensureUserAuthenticated";


const ticketRoutes = Router();

const createTicketController = new CreateTicketController();
const findTicketsByEventController = new FindTicketsByEventController();

ticketRoutes.post("/",ensureUserAuthenticated, createTicketController.handle);
ticketRoutes.get("/", findTicketsByEventController.handle);

export { ticketRoutes };