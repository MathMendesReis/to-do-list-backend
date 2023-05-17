import express from 'express'
import { UserController } from '../controller/UserController'
import { UserBusiness } from '../business/UserBusiness'
import { UserDataBase } from '../database/UserDataBase'

const userController = new UserController(
    new UserBusiness(
        new UserDataBase()
    )
)

export const userRouter = express.Router()

userRouter.get("/",userController.getAllUsers)
userRouter.post("/",userController.createUser)
userRouter.delete("/:id",userController.deleteUser)