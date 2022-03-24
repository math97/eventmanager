import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository} from "../modules/users/repositories/implementations/UserRepository";

interface IPayload {
  sub: string;
}

export async function ensureUserAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new Error("Token missing");

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "179d1e5dfc5ac8ea3e4f0d4887890e0e"
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) throw new Error("User does not exists!");

    request.user = { id:user_id}

    next();
  } catch {
    throw new Error("Invalid token!");
  }
}