import z from 'zod'
export interface createUserDTO_input {
    id: string;
    name:string;
    email:string;
    password: string
}

export interface createUserDTO_output {
    message:string
}

export const createUserDTO_inputSchemma = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    password:z.string()
}).transform((data)=> data as createUserDTO_input)
