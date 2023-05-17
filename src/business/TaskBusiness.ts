import { TaskDataBase } from "../database/TaskDataBase";

export class TaskBusiness {
  constructor(private taskDatabase: TaskDataBase) {}
  public getAllTasks = async () => {
    return await this.taskDatabase.getAllTasks();
  };
  public postTasks = async (input: {}) => {
    await this.taskDatabase.postTasks(input);
  };
  public putTasks = async (input: {}) => {
    await this.taskDatabase.putTasks(input);
  };
  public deleteTasks = async (id: string) => {
    await this.taskDatabase.deleteTasks(id);
    return {
        message:`task alterada com sucesso`
    }
    
  };
}
