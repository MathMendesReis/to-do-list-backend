import { Request, Response } from "express";
import { TaskBusiness } from "../business/TaskBusiness";
import { ZodError } from "zod";
import { BaseError } from "../erros/BaseError";
import { getAllDTO_output_schemma } from "../dtos/tasksDTOs/getAllTask.DTO";
import { create_taskDTOSchemma } from "../dtos/tasksDTOs/create_task_DTO";
import { updateTaskDTOSCHEMMA } from "../dtos/tasksDTOs/update_task_DTOs";

export class TaskController {
  constructor(private taskBusiness: TaskBusiness) {}

  public getAllTasks = async (req: Request, res: Response) => {
    try {
      const result = await this.taskBusiness.getAllTasks();
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
  //

  public postTasks = async (req: Request, res: Response) => {
    try {
      const input = create_taskDTOSchemma.parse({
        title: req.body.title,
        description: req.body.description,
      });

      const result = await this.taskBusiness.postTasks(input);

      res.status(200).send(result);
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };
  //
  public putTasks = async (req: Request, res: Response) => {
    try {
      const input = updateTaskDTOSCHEMMA.parse({
        id: req.params.id,
        title: req.body.title || undefined,
        description: req.body.description || undefined,
        status: req.body.status || undefined,
      });
      const result = await this.taskBusiness.putTasks(input);
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };
  //
  public deleteTasks = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await this.taskBusiness.deleteTasks(id);

      res.status(200).send(result);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("error inesperado");
      }
    }
  };
}
