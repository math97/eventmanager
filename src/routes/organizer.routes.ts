import { Router} from "express";

import {CreateOrganizerController} from "../modules/organizers/useCases/createOrganizerUseCase/CreateOrganizerController";

const organizersRoutes = Router();

const createOrganizerController = new CreateOrganizerController();

organizersRoutes.post("/",createOrganizerController.handle);

export {organizersRoutes}