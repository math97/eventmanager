import {Router} from "express";
import {organizersRoutes} from "./organizer.routes";
import {usersRoute} from "./user.routes";
import {authenticateRoutes} from "./authenticate.routes";

const routes = Router();

routes.use("/organizer",organizersRoutes);
routes.use("/user",usersRoute);
routes.use("/session",authenticateRoutes);


export {routes}