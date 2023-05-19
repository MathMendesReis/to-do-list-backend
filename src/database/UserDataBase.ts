import { createUserDTO_input } from "../dtos/usersDTOs/createUserDTOs";
import { getDTO_output } from "../dtos/usersDTOs/getDTO";
import { getUser } from "../dtos/usersDTOs/getUserById";
import { Users } from "../models/Users";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {
  public static TABLES_ACCOUNTS = "users";
  public getAllUsers = async (): Promise<getDTO_output[]> => {
    const getAllUsers = await BaseDataBase.connetion(
      UserDataBase.TABLES_ACCOUNTS
    );
    return getAllUsers.map((user) => {
      return {
        id:user.id,
        name: user.name,
        email: user.email,
      };
    });
  };
  public createUser = async (input: Users): Promise<void> => {
    await BaseDataBase.connetion(UserDataBase.TABLES_ACCOUNTS).insert(input);
  };
  public deleteUser = async (id:string):Promise<void> => {
    await BaseDataBase.connetion(UserDataBase.TABLES_ACCOUNTS).where({ id }).delete();
  };
  public getUserById =async (id:string):Promise<getUser> => {
    const [result] = await BaseDataBase.connetion(UserDataBase.TABLES_ACCOUNTS).where({ id })
    return result
  }
  public getUserByEmail =async (email:string):Promise<getUser> => {
    const [result] = await BaseDataBase.connetion(UserDataBase.TABLES_ACCOUNTS).where({ email:email })
    return result
  }
}
