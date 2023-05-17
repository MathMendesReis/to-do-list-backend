import z from 'zod'
export interface deleteUserDTOInput {
    id:string
}
export interface deleteUserDTOOutput{
    message:string
}

export const deleteUSerDTOSCHEMMA = z.object({
    id:z.string(),

}).transform((data) => data as deleteUserDTOInput)