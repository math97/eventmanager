import { Router} from "express";

import {CreateEventController} from "../modules/events/useCases/createEventUseCase/CreateEventController";
import {ListEventController} from "../modules/events/useCases/listEventsUseCase/ListEventController";
import {FindEventByOrganizeController} from "../modules/events/useCases/findEventByOrganizerUseCase/FindEventByOrganizerController";

import {ensureOrganizerAuthenticated} from "../middlewares/ensureOrganizerAuthenticated";

const eventsRoute = Router();

const createEventController = new CreateEventController();
const listEventController = new ListEventController();
const findEventByOrganizeController = new FindEventByOrganizeController();

eventsRoute.post("/",ensureOrganizerAuthenticated,createEventController.handle);
eventsRoute.get("/organizer",ensureOrganizerAuthenticated,findEventByOrganizeController.handle);
eventsRoute.get("/",listEventController.handle);

export {eventsRoute}