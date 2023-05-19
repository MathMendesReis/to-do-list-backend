import { UsersTasksBusiness } from "../business/UsersTasksBusinnes";
import { inputDTOUsersTasks } from "../dtos/usersTaksDTOs/postsUsersTasksDTO";
import { UserTasks } from "../models/UsersTasks";
import { BaseDataBase } from "./BaseDataBase";

export class UsersTasksBaseDataBase extends BaseDataBase {
  public static users_tasks = "users_tasks";
  public static users = "users";
  public static tasks = "tasks";


  public getAllUsers_tasks = async () => {
    // return await BaseDataBase.connetion(UsersTasksBaseDataBase.tasks)
    //   .select("users.*","tasks.*")
    //   .from(UsersTasksBaseDataBase.tasks)
    //   .innerJoin(UsersTasksBaseDataBase.users_tasks, 'tasks.id', 'users_tasks.task_id')
    //   .innerJoin(UsersTasksBaseDataBase.users, 'users.id', 'users_tasks.user_id');

    return await BaseDataBase.connetion(UsersTasksBaseDataBase.users_tasks)
    .select("tasks.*",
    "users.*",
    "tasks.id as task_id",
    "users.id as users_id"
    )
    .from(UsersTasksBaseDataBase.users_tasks)
    .innerJoin(UsersTasksBaseDataBase.tasks, 'tasks.id', 'users_tasks.task_id')
    .innerJoin(UsersTasksBaseDataBase.users, "users.id", "users_tasks.user_id");

  };
  public postUsers_tasks = async (input: UserTasks): Promise<void> => {
    return await BaseDataBase.connetion(
      UsersTasksBaseDataBase.users_tasks
    ).insert(input);
  };
 
  public deleteUsers_tasks = async ({user_id,task_id}:inputDTOUsersTasks) => {
    return await BaseDataBase.connetion(UsersTasksBaseDataBase.users_tasks)
    .where({user_id:user_id})
    .andWhere({task_id:task_id})
    .del()
  };
}
