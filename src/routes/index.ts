import {Router} from "express";
import {organizersRoutes} from "./organizer.routes";
import {usersRoute} from "./user.routes";
import {authenticateRoutes} from "./authenticate.routes";
import {eventsRoute} from "./event.routes";

const routes = Router();

routes.use("/organizer",organizersRoutes);
routes.use("/user",usersRoute);
routes.use("/session",authenticateRoutes);
routes.use("/event",eventsRoute);

export {routes}