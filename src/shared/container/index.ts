import { container} from "tsyringe";
import { OrganizersRepository } from "../../modules/organizers/repositories/implementations/OrganizerRepository";
import { IOrganizerRepository } from "../../modules/organizers/repositories/IOrganizerRepository";

import { UsersRepository } from "../../modules/users/repositories/implementations/UserRepository";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";

container.registerSingleton<IOrganizerRepository>(
  "OrganizersRepository",
  OrganizersRepository
);

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
);