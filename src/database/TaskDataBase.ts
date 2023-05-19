import { getAllDTODB } from "../dtos/tasksDTOs/getAllTask.DTO";
import { Tasks } from "../models/Tasks";
import { BaseDataBase } from "./BaseDataBase";

export class TaskDataBase extends BaseDataBase {
  public static TABLES_ACCOUNTS = "tasks";
  //
  public getAllTasks = async ():Promise<getAllDTODB[]> => {
    return await BaseDataBase.connetion(TaskDataBase.TABLES_ACCOUNTS);
  };
  //
  public getTaskById = async (id: string): Promise<getAllDTODB> => {
    const [result] = await BaseDataBase.connetion(TaskDataBase.TABLES_ACCOUNTS)
    .where({
      id: id,
    });
    return result
  };
  //
  public postTasks = async (input:Tasks):Promise<void> => {
    await BaseDataBase.connetion(TaskDataBase.TABLES_ACCOUNTS).insert(input);
  };
  //
  public putTasks = async (update:Tasks
    ):Promise<void> => {
    await BaseDataBase.connetion(TaskDataBase.TABLES_ACCOUNTS)
      .where({ id: update.get_id()})
      .update({
        title:update.get_title(),
        description: update.get_description(),
        status:update.get_status()
      })
  };
  //
  public deleteTasks = async (id: string):Promise<void> => {
    await BaseDataBase.connetion(TaskDataBase.TABLES_ACCOUNTS)
      .del()
      .where({ id: id });
  };
}
