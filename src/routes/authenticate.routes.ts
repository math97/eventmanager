import { Router } from "express";

import {AuthenticateOrganizerController  } from "../modules/organizers/useCases/authenticateOrganizersUseCase/AuthenticateOrganizerController";
import {AuthenticateUserController  } from "../modules/users/useCases/authenticateUserUseCase/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateOrganizerController = new AuthenticateOrganizerController();
const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/organizer", authenticateOrganizerController.handle);
authenticateRoutes.post("/user", authenticateUserController.handle);

export { authenticateRoutes };