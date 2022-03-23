import { Router} from "express";

import {CreateOrganizerController} from "../modules/organizers/useCases/createOrganizerUseCase/CreateOrganizerController";
import {UpdateOrganizerController} from "../modules/organizers/useCases/updateOrganizerUseCase/UpdateOrganizerController";

import {ensureOrganizerAuthenticated} from "../middlewares/ensureOrganizerAuthenticated";

const organizersRoutes = Router();

const createOrganizerController = new CreateOrganizerController();
const updateOrganizerController = new UpdateOrganizerController();

organizersRoutes.post("/",createOrganizerController.handle);
organizersRoutes.post("/",ensureOrganizerAuthenticated,updateOrganizerController.handle);

export {organizersRoutes}