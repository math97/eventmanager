import {Router} from "express";
import {organizerRoutes} from "./organizer.routes";
import {authenticateRoutes} from "./authenticate.routes";

const routes = Router();

routes.use("/organizer",organizerRoutes);
routes.use("/session",authenticateRoutes);


export {routes}