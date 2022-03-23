import { Router} from "express";

import {CreateEventController} from "../modules/events/useCases/createEventUseCase/CreateEventController";
import {ListEventController} from "../modules/events/useCases/listEventsUseCase/ListEventController";

import {ensureOrganizerAuthenticated} from "../middlewares/ensureOrganizerAuthenticated";

const eventsRoute = Router();

const createEventController = new CreateEventController();
const listEventController = new ListEventController();

eventsRoute.post("/",ensureOrganizerAuthenticated,createEventController.handle);
eventsRoute.get("/",listEventController.handle);

export {eventsRoute}