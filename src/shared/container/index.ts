import { container} from "tsyringe";
import { OrganizersRepository } from "../../modules/organizers/repositories/implementations/OrganizerRepository";
import { IOrganizerRepository } from "../../modules/organizers/repositories/IOrganizerRepository";

import { UsersRepository } from "../../modules/users/repositories/implementations/UserRepository";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";

import { EventsRepository } from "../../modules/events/repositories/implementations/EventRepository";
import { IEventRepository } from "../../modules/events/repositories/IEventRepository";

container.registerSingleton<IOrganizerRepository>(
  "OrganizersRepository",
  OrganizersRepository
);

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IEventRepository>(
  "EventsRepository",
  EventsRepository
);