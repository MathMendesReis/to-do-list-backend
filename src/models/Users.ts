export class Users {
    public get_id(): string {
        return this.id;
    }
    public set_id(value: string) {
        this.id = value;
    }
    public get_name(): string {
        return this.name;
    }
    public set_name(value: string) {
        this.name = value;
    }
    public get_email(): string {
        return this.email;
    }
    public set_email(value: string) {
        this.email = value;
    }
    public get_password(): string {
        return this.password;
    }
    public set_password(value: string) {
        this.password = value;
    }
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ){}
}