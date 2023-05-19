import z from "zod";
export interface getAllDTO_output {
  id:string;
  title: string;
  description: string;
}

export interface getAllDTO_input {
  id: string;
  title: string;
  description: string;
  created_at: string;
  status: number;
}
export interface getAllDTODB {
  id: string;
  title: string;
  description: string;
  created_at: string;
  status: number;
}

export const getAllDTO_output_schemma = z
  .object({
    id: z.string({
      required_error: "id e obrigatorio!",
      invalid_type_error: "'id' deve ser do tipo string",
    }),
    title: z.string({
      required_error: " title obrigatorio!",
      invalid_type_error: "'title' deve ser do tipo string",

    }),
    description: z.string({
      required_error: "description obrigatorio!",
      invalid_type_error: "'description' deve ser do tipo string",

    }),
    created_at: z.string({
      required_error: "created_at obrigatorio!",
      invalid_type_error: "'created_at' deve ser do tipo string",

    }),
    status: z.number({
      required_error: "status obrigatorio!",
      invalid_type_error: "'status' deve ser do tipo number",

    }),
  })
  .transform((data) => data as getAllDTO_input);
