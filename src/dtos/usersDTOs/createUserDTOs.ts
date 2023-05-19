import z from "zod";
export interface createUserDTO_input {
  name: string;
  email: string;
  password: string;
}

export interface createUserDTO_output {
  message: string;
}

export const createUserDTO_inputSchemma = z
  .object({
    name: z.string({
      required_error:"name is required",
      invalid_type_error:"'name' must be a string. "
    }),
    email: z.string({
      required_error:"email is required",
      invalid_type_error:"'email' must be a string. "
    }).email(),
    password: z.string({
      required_error:"password is required",
      invalid_type_error:"'password' must be a string. "
    }),
  })
  .transform((data) => data as createUserDTO_input);
