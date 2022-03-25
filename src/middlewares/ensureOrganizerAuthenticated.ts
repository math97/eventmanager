import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import AppError from "../errors/AppError";

import { OrganizersRepository } from "../modules/organizers/repositories/implementations/OrganizerRepository";

interface IPayload {
  sub: string;
}

export async function ensureOrganizerAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader) throw new Error("Token missing");

    const [, token] = authHeader.split(" ");

    if(!token) throw new AppError("Token missing",401);
 
    const { sub: organizer_id } = verify(
      token,
      "179d1e5dfc5ac8ea3e4f0d4887890e0e"
    ) as IPayload;
    
    const organizersRepository = new OrganizersRepository();
    const organizer = await organizersRepository.findById(organizer_id);    

    if (!organizer) throw new AppError("Organizer does not exists!");

    request.organizer = { id:organizer_id}

    next();
  } catch(error) {
    if(error instanceof AppError) next(error);
    else next(new AppError("Invalid token!",401))
  }
}