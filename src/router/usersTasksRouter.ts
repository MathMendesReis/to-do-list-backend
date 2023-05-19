import express from 'express'
import { UsersTasksController } from '../controller/UsersTasksController'
import { UsersTasksBusiness } from '../business/UsersTasksBusinnes'
import { UsersTasksBaseDataBase } from '../database/UsersTasksDataBase'

export const userTaskRouter = express.Router()

const usersTaskController = new UsersTasksController(
    new UsersTasksBusiness(
        new UsersTasksBaseDataBase()
    )
)

userTaskRouter.post('/',usersTaskController.postUsers_tasks)
userTaskRouter.get('/',usersTaskController.getAllUsers_tasks)
userTaskRouter.delete('/tasks',usersTaskController.deleteUsers_tasks)