export class UserTasks {
    public get_user_id(): string {
        return this.user_id;
    }
    public get_task_id(): string {
        return this.task_id;
    }
    constructor(private user_id: string, private task_id: string) {}
 
}
