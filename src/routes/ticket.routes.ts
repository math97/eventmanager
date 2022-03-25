import { Router } from "express";

import { CreateTicketController } from "../modules/tickets/useCases/CreateTicketUseCase/CreateTicketController";
import { FindTicketsByEventController } from "../modules/tickets/useCases/FindTicketsByEventUseCase/FindTicketByEventController";
import { FindTicketsByUserController } from "../modules/tickets/useCases/findTicketsByUserUseCase/FindTicketsByUserController";

import {ensureUserAuthenticated} from "../middlewares/ensureUserAuthenticated";


const ticketRoutes = Router();

const createTicketController = new CreateTicketController();
const findTicketsByEventController = new FindTicketsByEventController();
const findTicketsByUserController = new FindTicketsByUserController();

ticketRoutes.get("/event", findTicketsByEventController.handle);
ticketRoutes.get("/user",ensureUserAuthenticated, findTicketsByUserController.handle);
ticketRoutes.post("/",ensureUserAuthenticated, createTicketController.handle);

export { ticketRoutes };