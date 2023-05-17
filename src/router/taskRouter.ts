import express from 'express'
import { TaskController } from '../controller/TaskController'
import { TaskBusiness } from '../business/TaskBusiness'
import { TaskDataBase } from '../database/TaskDataBase'

const taskController = new TaskController(
    new TaskBusiness(
        new TaskDataBase()
    )
)

export const taskRouter = express.Router()

taskRouter.get("/",taskController.getAllTasks)
taskRouter.post("/",taskController.postTasks)
taskRouter.delete("/:id",taskController.deleteTasks)
taskRouter.put("/",taskController.putTasks)