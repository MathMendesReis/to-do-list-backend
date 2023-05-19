import { UsersTasksBusiness } from "../business/UsersTasksBusinnes";
import { inputDTOUsersTasks } from "../dtos/usersTaksDTOs/postsUsersTasksDTO";
import { UserTasks } from "../models/UsersTasks";
import { BaseDataBase } from "./BaseDataBase";

export class UsersTasksBaseDataBase extends BaseDataBase {
  public static users_tasks = "users_tasks";
  public static users = "users";
  public static tasks = "tasks";


  public getAllUsers_tasks = async (id:string) => {   
    const users = await BaseDataBase.connetion(UsersTasksBaseDataBase.users_tasks)
    .where({task_id:id})
    .select("users.*","users_tasks.*")
    .from("users")
    .innerJoin(UsersTasksBaseDataBase.users_tasks, "users.id", "users_tasks.user_id")
    return users

  };
  public getAllTask =async () => {
    return await BaseDataBase.connetion(UsersTasksBaseDataBase.tasks)
  }

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
