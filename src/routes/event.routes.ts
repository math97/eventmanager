import { Router} from "express";

import {CreateEventController} from "../modules/events/useCases/createEventUseCase/CreateEventController";
import {ListEventController} from "../modules/events/useCases/listEventsUseCase/ListEventController";
import {FindEventByOrganizeController} from "../modules/events/useCases/findEventByOrganizerUseCase/FindEventByOrganizerController";
import {DeleteEventController} from "../modules/events/useCases/deleteEventUseCase/DeleteEventController";

import {ensureOrganizerAuthenticated} from "../middlewares/ensureOrganizerAuthenticated";

const eventsRoute = Router();

const createEventController = new CreateEventController();
const listEventController = new ListEventController();
const findEventByOrganizeController = new FindEventByOrganizeController();
const deleteEventController = new DeleteEventController();

eventsRoute.get("/",listEventController.handle);
eventsRoute.post("/",ensureOrganizerAuthenticated,createEventController.handle);
eventsRoute.delete("/",ensureOrganizerAuthenticated,deleteEventController.handle);
eventsRoute.get("/organizer",ensureOrganizerAuthenticated,findEventByOrganizeController.handle);

export {eventsRoute}