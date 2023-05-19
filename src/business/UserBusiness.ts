import { NotFoundError } from './../erros/NotFoundError';
import { createUserDTO_input, createUserDTO_inputSchemma, createUserDTO_output } from './../dtos/usersDTOs/createUserDTOs';
import { UserDataBase } from "../database/UserDataBase";
import { deleteUserDTOOutput } from '../dtos/usersDTOs/deleteUser.DTOs';
import { IdGenerator } from '../services/IdGenerator';
import { getUser } from '../dtos/usersDTOs/getUserById';
import { BadRequestError } from '../erros/BadResquestError';
import { Users } from '../models/Users';
import { getDTO_output } from '../dtos/usersDTOs/getDTO';

export class UserBusiness{
    constructor(
        private userDataBase:UserDataBase,
        private idGenerator: IdGenerator
        ){}
    public getAllUsers =async ():Promise<getDTO_output[]> => {
       const result = await this.userDataBase.getAllUsers()
       if(result.length < 1){
        throw new NotFoundError('Nenhum usuario encontrado')
       }
       return result;
    }
    public createUser =async (input:createUserDTO_input):Promise<createUserDTO_output> => {
        const id = this.idGenerator.generate()
        const isUser = await this.userDataBase.getUserById(id)
        if(isUser){
           throw new BadRequestError("usuario já cadastrado!") 
        }

        const isEmail = await this.userDataBase.getUserByEmail(input.email)
        if(isEmail){
           throw new BadRequestError("email já cadastrado!") 
        }
        const newUser = new Users(
            id,
            input.name,
            input.email,
            input.password
        )
        console.log(newUser)
        
        await this.userDataBase.createUser(newUser)
        return {
            message:"usuario criado com sucesso"
        }
        
    }
    public deleteUser =async (id:string):Promise<deleteUserDTOOutput> => {
        const isUser = await this.userDataBase.getUserById(id)
        console.log(id)
        if(!isUser){
           throw new NotFoundError
        }
        await this.userDataBase.deleteUser(id)
        
        return {
            message:`user deletedo com sucesso.`
        }
    }

    public getUserById =async (id:string):Promise<getUser> => {
        return await this.userDataBase.getUserById(id)
    }
    public getUserByEmail =async (email:string):Promise<getUser> => {
        return await this.userDataBase.getUserByEmail(email)
    }
}