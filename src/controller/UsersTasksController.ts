import { Request, Response } from "express";
import { ZodError } from "zod";
import { BaseError } from "../erros/BaseError";
import { inputDTOUsersTasksSCHEMMA } from "../dtos/usersTaksDTOs/postsUsersTasksDTO";
import { UsersTasksBusiness } from "../business/UsersTasksBusinnes";

export class UsersTasksController {
  constructor(private usersTasksBusiness: UsersTasksBusiness) {}

  public postUsers_tasks = async (req: Request, res: Response) => {
    try {
      const input = inputDTOUsersTasksSCHEMMA.parse({
        user_id: req.body.user_id,
        task_id: req.body.task_id,
      });
      const result = await this.usersTasksBusiness.postUsers_tasks(input);
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("erro inesperado");
      }
    }
  };
  public getAllUsers_tasks = async (req: Request, res: Response) => {
    try {
      const result = await this.usersTasksBusiness.getAllUsers_tasks();
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("erro inesperado");
      }
    }
  };
  public deleteUsers_tasks = async (req: Request, res: Response) => {
    try {
      const input = inputDTOUsersTasksSCHEMMA.parse({
        user_id: req.body.user_id,
        task_id: req.body.task_id,
      });
      const result = await this.usersTasksBusiness.deleteUsers_tasks(input)
      res.status(200).send(result);

    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("erro inesperado");
      }
    }
  };
}
