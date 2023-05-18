import z from "zod";
export interface createUserDTO_input {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface createUserDTO_output {
  message: string;
}

export const createUserDTO_inputSchemma = z
  .object({
    id: z.string({
      required_error: "'id' é obrigatória",
      invalid_type_error: "'id' deve ser do tipo string",
    }),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
  })
  .transform((data) => data as createUserDTO_input);
