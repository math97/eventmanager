import "reflect-metadata";
import express, { NextFunction, Request,Response } from "express";

import "./database";
import "./shared/container";

import {routes} from "./routes"
import AppError from "./errors/AppError";

const app = express();

app.use(express.json());

app.use(routes);

app.use((error: Error, request: Request, response: Response, _: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }
  console.log(error);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
});

app.listen(3333, () => console.log("Server is running!"));