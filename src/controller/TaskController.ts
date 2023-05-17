import { Request, Response } from "express";
import { TaskBusiness } from "../business/TaskBusiness";
import { ZodError } from "zod";
import { BaseError } from "../erros/BaseError";

export class TaskController {
  constructor(private taskBusiness: TaskBusiness) {}

  public getAllTasks = async (req: Request, res: Response) => {
    try {
      const result = await this.taskBusiness.getAllTasks();
      res.status(200).send(result);
    } catch (error) {}
  };
  public postTasks = async (req: Request, res: Response) => {
    try {
      const input = {
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        created_at: req.body.created_at,
        status: req.body.status,
      };

      const result = await this.taskBusiness.postTasks(input);

      res.status(200).send(result);
    } catch (error) {
        if(error instanceof ZodError){
            res.status(400).send(error.issues)
        }else if(error instanceof BaseError){
            res.status(error.statusCode).send(error.message)
        }else{
            res.status(500).send("erro inesperado")
        }
    }
  };
  public putTasks = async (req: Request, res: Response) => {
    try {
      const input = {
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        created_at: req.body.created_at,
        status: req.body.status,
      };

      const result = await this.taskBusiness.putTasks(input);
      res.status(200).send(result);
    } catch (error) {
        if(error instanceof ZodError){
            res.status(400).send(error.issues)
        }else if( error instanceof BaseError){
            res.status(error.statusCode).send(error.message)
        }else{
            res.status(500).send("Erro inesperado")
        }
    }
  };
  public deleteTasks = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await this.taskBusiness.deleteTasks(id);

      res.status(200).send(result);
    } catch (error) {
        if(error instanceof ZodError){
            res.status(400).send(error.issues)
        }else if(error instanceof BaseError){
            res.status(error.statusCode).send(error.message)
        }else{
            res.status(500).send("error inesperado")
        }   
    }
  };
}
