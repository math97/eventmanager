import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { OrganizersRepository } from "../modules/organizers/repositories/implementations/OrganizerRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new Error("Token missing");

  const [, token] = authHeader.split(" ");

  try {
    const { sub: organizer_id } = verify(
      token,
      "179d1e5dfc5ac8ea3e4f0d4887890e0e"
    ) as IPayload;

    const organizersRepository = new OrganizersRepository();
    const organizer = organizersRepository.findById(organizer_id);

    if (!organizer) throw new Error("User does not exists!");
    next();
  } catch {
    throw new Error("Invalid token!");
  }
}