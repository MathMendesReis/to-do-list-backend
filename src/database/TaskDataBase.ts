import { BaseDataBase } from "./BaseDataBase";

export class TaskDataBase extends BaseDataBase {
  public static TABLES_ACCOUNTS = "tasks";
  public getAllTasks = async () => {
    return await BaseDataBase.connetion(TaskDataBase.TABLES_ACCOUNTS);
  };
  public postTasks = async (input: {}) => {
    await BaseDataBase.connetion(TaskDataBase.TABLES_ACCOUNTS).insert(input);
  };
  public putTasks = async (input: {}) => {
    await BaseDataBase.connetion(TaskDataBase.TABLES_ACCOUNTS).update(input);
  };
  public deleteTasks = async (id: string) => {
    await BaseDataBase.connetion(TaskDataBase.TABLES_ACCOUNTS)
      .del()
      .where({ id: id });
    console.log(id)
    return {
      message: "tarefa excluida",
    };
  };
}
