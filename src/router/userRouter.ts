import express from "express";
import { UserController } from "../controller/UserController";
import { UserBusiness } from "../business/UserBusiness";
import { UserDataBase } from "../database/UserDataBase";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";

const userController = new UserController(
  new UserBusiness(new UserDataBase(), new IdGenerator(), new TokenManager())
);

export const userRouter = express.Router();

userRouter.get("/", userController.getAllUsers);
userRouter.post("/create", userController.createUser);
userRouter.delete("/:id", userController.deleteUser);
