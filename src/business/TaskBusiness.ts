import { TaskDataBase } from "../database/TaskDataBase";
import { getByIdDTO_output } from "../dtos/tasksDTOs/getTaskByIdDTO";
import { getAllDTODB, getAllDTO_output } from "../dtos/tasksDTOs/getAllTask.DTO";
import {
  create_taskDTO,
  create_taskDTOOutput,
  statusEnum,
} from "../dtos/tasksDTOs/create_task_DTO";
import { Tasks } from "../models/Tasks";
import { IdGenerator } from "../services/IdGenerator";
import { updateTaskDTO, TaskDTOOutput } from "../dtos/tasksDTOs/update_task_DTOs";
import { BadRequestError } from "../erros/BadResquestError";
import { NotFoundError } from "../erros/NotFoundError";

export class TaskBusiness {
  constructor(
    private taskDatabase: TaskDataBase,
    private idGenerator: IdGenerator // injetamos o idGenerator
  ) {}
  //
  public getAllTasks = async (): Promise<getAllDTO_output[]> => {
    const result = await this.taskDatabase.getAllTasks()
    
    const formatResult = result.map((task) => {
      return {
        id:task.id,
        title:task.title,
        description:task.description
      };
    });

    return formatResult;
  };
  //

  public postTasks = async (
    input: create_taskDTO
  ): Promise<create_taskDTOOutput> => {
    const id = this.idGenerator.generate();
    const isTask = await this.taskDatabase.getTaskById(id);
    if (isTask) {
      throw new BadRequestError("task já cadastrada.");
    }
    const newTask = new Tasks(
      id,
      input.title,
      new Date().toISOString(),
      input.description,
      statusEnum.NEGATIVE
    );

    await this.taskDatabase.postTasks(newTask);

    return {
      message: "task criada com sucesso",
    };
  };
  //
  public putTasks = async (input: updateTaskDTO):Promise<TaskDTOOutput> => {
    const task = await this.taskDatabase.getTaskById(input.id);
    if (!task) {
      throw new NotFoundError("Recurso não encontrado");
    }
    const updateTaskObj = new Tasks(
      task.id,
      input.title || task.title,
      task.created_at,
      input.description || task.description,
      input.status || task.status
    );

    await this.taskDatabase.putTasks(updateTaskObj);
    return {
      message: "task alterada",
    };
  };
  //
  public deleteTasks = async (id: string):Promise<TaskDTOOutput> => {
    const task = await this.taskDatabase.getTaskById(id);
    if (!task) {
      throw new NotFoundError("Recurso não encontrado");
    }
    await this.taskDatabase.deleteTasks(id);
    return {
      message: `task deletada com sucesso`,
    };
  };

  public getTaskById = async (id: string): Promise<getAllDTODB> => {
    const task = await this.taskDatabase.getTaskById(id);
    if (!task) {
      throw new NotFoundError("Recurso não encontrado");
    }
    const result = await this.taskDatabase.getTaskById(id);
    return result;
  };
}
