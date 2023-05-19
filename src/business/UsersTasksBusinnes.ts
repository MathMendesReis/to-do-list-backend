import { title } from 'process';
import { TaskDataBase } from "../database/TaskDataBase";
import { UserDataBase } from "../database/UserDataBase";
import { UsersTasksBaseDataBase } from "../database/UsersTasksDataBase";
import { getWithUserOutputDTO } from "../dtos/usersTaksDTOs/getWithUserDTO";
import { inputDTOUsersTasks } from "../dtos/usersTaksDTOs/postsUsersTasksDTO";
import { NotFoundError } from "../erros/NotFoundError";
import { UserTasks } from "../models/UsersTasks";

export class UsersTasksBusiness {
  constructor(private usersTasksBaseDataBase: UsersTasksBaseDataBase) {}
  public postUsers_tasks = async (input: inputDTOUsersTasks) => {
    const newUserTask = new UserTasks(input.user_id, input.task_id);

    const userDataBase = new UserDataBase();
    const isUser = await userDataBase.getUserById(newUserTask.get_user_id());
    if (!isUser) {
      throw new NotFoundError("usuario não cadastrado!");
    }
    const taskDatabase = new TaskDataBase()
    const task = await taskDatabase.getTaskById(newUserTask.get_task_id());
    if (!task) {
      throw new NotFoundError("task não encontrado");
    }

    await this.usersTasksBaseDataBase.postUsers_tasks(newUserTask);

    return {
      message: `User atribuído à tarefa com sucesso`,
    };
  };


  public getAllUsers_tasks = async () => {
    const tasks = await this.usersTasksBaseDataBase.getAllTask()
    if(tasks.length === 0){
      throw new NotFoundError("nenhuma task encontrada");
    }

    const result = await Promise.all(tasks.map(async (task) => {
      const responsibles = await this.usersTasksBaseDataBase.getAllUsers_tasks(task.id);
      return {
        ...task,
        responsibles: responsibles
      };
    }));
 
    
  return result
}
  public deleteUsers_tasks = async (input: inputDTOUsersTasks) => {
    const userDataBase = new UserDataBase();
    const isUser = await userDataBase.getUserById(input.user_id);
    if (!isUser) {
      throw new NotFoundError("usuario não cadastrado!");
    }
    const taskDatabase = new TaskDataBase()
    const task = await taskDatabase.getTaskById(input.task_id);
    if (!task) {
      throw new NotFoundError("task não encontrado");
    }


    await this.usersTasksBaseDataBase.deleteUsers_tasks(input)
    return {
      message: "User removido da tarefa com sucesso"
    }
  };
}
