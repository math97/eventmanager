import { Router} from "express";

import {CreateEventController} from "../modules/events/useCases/createEventUseCase/CreateEventController";

import {ensureOrganizerAuthenticated} from "../middlewares/ensureOrganizerAuthenticated";

const eventsRoute = Router();

const createEventController = new CreateEventController();

eventsRoute.post("/",ensureOrganizerAuthenticated,createEventController.handle);

export {eventsRoute}