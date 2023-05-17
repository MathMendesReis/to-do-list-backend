export class Users {
    public get_id(): string {
        return this._id;
    }
    public set_id(value: string) {
        this._id = value;
    }
    public get_name(): string {
        return this._name;
    }
    public set_name(value: string) {
        this._name = value;
    }
    public get_email(): string {
        return this._email;
    }
    public set_email(value: string) {
        this._email = value;
    }
    public get_password(): string {
        return this._password;
    }
    public set_password(value: string) {
        this._password = value;
    }
    constructor(
        private _id: string,
        private _name: string,
        private _email: string,
        private _password: string
    ){}
}