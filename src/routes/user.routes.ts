import { Router} from "express";

import {CreateUserController} from "../modules/users/useCases/createUserUseCase/CreateUserController";
import {UpdateUserController} from "../modules/users/useCases/updateUserUseCase/UpdateUserController";


import {ensureUserAuthenticated} from "../middlewares/ensureUserAuthenticated";

const usersRoute = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();

usersRoute.post("/",createUserController.handle);
usersRoute.put("/",ensureUserAuthenticated,updateUserController.handle);

export {usersRoute}