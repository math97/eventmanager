import { Router} from "express";

import {CreateOrganizerController} from "../modules/organizers/useCases/createOrganizerUseCase/CreateOrganizerController";

const organizerRoutes = Router();

const createOrganizerController = new CreateOrganizerController();

organizerRoutes.get("/",createOrganizerController.handle);

export {organizerRoutes}