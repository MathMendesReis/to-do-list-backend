import { createUserDTO_input, createUserDTO_inputSchemma, createUserDTO_output } from './../dtos/usersDTOs/createUserDTOs';
import { UserDataBase } from "../database/UserDataBase";
import { promises } from 'dns';
import { deleteUserDTOOutput } from '../dtos/usersDTOs/deleteUser.DTOs';

export class UserBusiness{
    constructor(private userDataBase:UserDataBase){}
    public getAllUsers =async () => {
       return await this.userDataBase.getAllUsers()
    }
    public createUser =async (input:createUserDTO_input):Promise<createUserDTO_output> => {
        await this.userDataBase.createUser(input)
        return {
            message:"usuario criado com sucesso"
        }
        
    }
    public deleteUser =async (id:string):Promise<deleteUserDTOOutput> => {
        await this.userDataBase.deleteUser(id)
        return {
            message:`user deletedo com sucesso.`
        }
    }
}