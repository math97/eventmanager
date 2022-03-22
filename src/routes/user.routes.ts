import { Router} from "express";

import {CreateUserController} from "../modules/users/useCases/createUserUseCase/CreateUserController";

const usersRoute = Router();

const createUserController = new CreateUserController();

usersRoute.post("/",createUserController.handle);

export {usersRoute}