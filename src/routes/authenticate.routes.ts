import { Router } from "express";

import {AuthenticateOrganizerController  } from "../modules/organizers/useCases/authenticateOrganizersUseCase/AuthenticateOrganizerController";

const authenticateRoutes = Router();

const authenticateOrganizerController = new AuthenticateOrganizerController();

authenticateRoutes.post("/organizer", authenticateOrganizerController.handle);

export { authenticateRoutes };