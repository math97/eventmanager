import { Router } from "express";

import { CreateTicketController } from "../modules/tickets/useCases/CreateTicketUseCase/CreateTicketController";
import { FindTicketsByEventController } from "../modules/tickets/useCases/FindTicketsByEventUseCase/FindTicketByEventController";

const ticketRoutes = Router();

const createTicketController = new CreateTicketController();
const findTicketsByEventController = new FindTicketsByEventController();

ticketRoutes.post("/", createTicketController.handle);
ticketRoutes.get("/", findTicketsByEventController.handle);

export { ticketRoutes };