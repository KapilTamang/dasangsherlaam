import {z} from "zod";

export const loginSchema = z.object({
    emai: z.email("Please enter a valid email address"),
    password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});

//Infer the Typescript type directly from our Zod validation matrix
export type LoginFormValues = z.infer<typeof loginSchema>;