import {
  createUserDTO_input,
  createUserDTO_inputSchemma,
} from "./../dtos/usersDTOs/createUserDTOs";
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { ZodError } from "zod";
import { BaseError } from "../erros/BaseError";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}
  public getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await this.userBusiness.getAllUsers();
      res.status(200).send(result);
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("error inesperado");
      }
    }
  };
  public createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const input = createUserDTO_inputSchemma.parse({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      const result = await this.userBusiness.createUser(input);

      res.status(200).send(result);
    } catch (error) {
      console.log(error)
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("error inesperado");
      }
    }
  };
  public deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const result = await this.userBusiness.deleteUser(id);
      res.status(200).send(result);
    } catch (error) {
      console.log(error);

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
