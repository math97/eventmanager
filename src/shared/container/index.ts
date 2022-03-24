import { container} from "tsyringe";
import { OrganizersRepository } from "../../modules/organizers/repositories/implementations/OrganizerRepository";
import { IOrganizerRepository } from "../../modules/organizers/repositories/IOrganizerRepository";

import { UsersRepository } from "../../modules/users/repositories/implementations/UserRepository";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";

import { EventsRepository } from "../../modules/events/repositories/implementations/EventRepository";
import { IEventRepository } from "../../modules/events/repositories/IEventRepository";

import { ITicketRepository } from "../../modules/tickets/repositories/ITicketRepository";
import { TicketsRepository } from "../../modules/tickets/repositories/implementations/TicketsRepository";

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

container.registerSingleton<ITicketRepository>(
  "TicketsRepository",
  TicketsRepository
);