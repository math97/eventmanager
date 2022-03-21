import { container} from "tsyringe";
import { OrganizersRepository } from "../../modules/organizers/repositories/implementations/OrganizerRepository";
import { IOrganizerRepository } from "../../modules/organizers/repositories/IOrganizerRepository";

container.registerSingleton<IOrganizerRepository>(
  "OrganizersRepository",
  OrganizersRepository
);