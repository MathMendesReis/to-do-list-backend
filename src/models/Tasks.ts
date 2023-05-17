export class Tasks {
    public get_status(): number {
        return this.status;
    }
    public set_status(value: number) {
        this.status = value;
    }
    public get_created_at(): string {
        return this.created_at;
    }
    public set_created_at(value: string) {
        this.created_at = value;
    }
    public get_title(): string {
        return this.title;
    }
    public set_title(value: string) {
        this.title = value;
    }
    public get_id(): string {
        return this.id;
    }
    public set_id(value: string) {
        this.id = value;
    }
    constructor(
        private id: string,
        private title: string,
        private created_at: string,
        private status: number
    ){}
}