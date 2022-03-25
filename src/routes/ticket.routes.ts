import { Router } from "express";

import { CreateTicketController } from "../modules/tickets/useCases/CreateTicketUseCase/CreateTicketController";

const ticketRoutes = Router();

const createTicketController = new CreateTicketController();

ticketRoutes.post("/", createTicketController.handle);

export { ticketRoutes };