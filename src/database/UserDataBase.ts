import { createUserDTO_input } from "../dtos/usersDTOs/createUserDTOs";
import { getDTO_output } from "../dtos/usersDTOs/getDTO";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {
  public static TABLES_ACCOUNTS = "users";
  public getAllUsers = async (): Promise<getDTO_output[]> => {
    const getAllUsers = await BaseDataBase.connetion(
      UserDataBase.TABLES_ACCOUNTS
    );
    return getAllUsers.map((user) => {
      return {
        name: user.name,
        email: user.email,
      };
    });
  };
  public createUser = async (input: createUserDTO_input): Promise<void> => {
    await BaseDataBase.connetion(UserDataBase.TABLES_ACCOUNTS).insert(input);
  };
  public deleteUser = async (id:string):Promise<void> => {
    await BaseDataBase.connetion(UserDataBase.TABLES_ACCOUNTS).where({ id }).delete();
  };
}
