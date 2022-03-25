import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import AppError from "../errors/AppError";

import { UsersRepository} from "../modules/users/repositories/implementations/UserRepository";

interface IPayload {
  sub: string;
}

export async function ensureUserAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new AppError("Token missing",401);

  const [, token] = authHeader.split(" ");

  if(!token) throw new AppError("Token missing",401);

    const { sub: user_id } = verify(
      token,
      "179d1e5dfc5ac8ea3e4f0d4887890e0e"
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) throw new AppError("User does not exists!",401);

    request.user = { id:user_id}

    next();
  } catch(error) {
    if(error instanceof AppError) next(error);
    else next(new AppError("Invalid token!",401))
  }
}