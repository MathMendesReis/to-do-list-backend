import z from 'zod'
export interface inputDTOUsersTasks{
    user_id:string,
    task_id:string
}

export const inputDTOUsersTasksSCHEMMA = z.object({
    user_id:z.string(),
    task_id:z.string()
}).transform(data=> data as inputDTOUsersTasks)