import z from "zod";

export interface updateTaskDTO {
  id: string;
  title: string;
  description: string;
  status: number;
}

export interface TaskDTOOutput {
  message:string
}

export const updateTaskDTOSCHEMMA = z
  .object({
    id: z.string(),
    title: z.string().optional(),
    description: z.string().optional(),
    status: z.number().optional(),
  })
  .transform((data) => data as updateTaskDTO);
