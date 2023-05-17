import { BaseError } from "./BaseError";

export class NotFounError extends BaseError{
    constructor(
        message:`Recurso não encontrado`
    ){
        super(404,message)
    }
}