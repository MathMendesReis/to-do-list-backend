import z from "zod";
export interface create_taskDTO {
  title: string;
  description: string;
}

export interface create_taskDTOOutput {
  message: string;
}

export enum statusEnum{
  NEGATIVE =0,
  POSITIVE = 1
}

export const create_taskDTOSchemma = z
  .object({
    title: z.string({
      required_error:"Title is required",
      invalid_type_error:"'title' must be a string. "
    }),
    description: z.string({
      required_error:"Description is required",
      invalid_type_error:"'Description' must be a string. "
    }),
  })
  .transform((data) => data as create_taskDTO);
