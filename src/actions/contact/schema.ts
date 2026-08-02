import {z} from "zod";

export const contactSchema = z.object({
    name:
    z.string().min(2, "Name must be at least 2 characters long").max(50, "Name must be at most 50 characters long"),
    email: 
    z.email("Please enter a valid email address"),
    message: z.string().min(10, "Message must be at least 10 characters long")
});

//Infer the Typescript type directly from our Zod validation matrix
export type ContactFormValues = z.infer<typeof contactSchema>;