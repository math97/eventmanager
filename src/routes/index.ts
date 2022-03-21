import {Router} from "express";
import {organizerRoutes} from "./organizer.routes";

const routes = Router();

routes.use("/organizer",organizerRoutes);


export {routes}