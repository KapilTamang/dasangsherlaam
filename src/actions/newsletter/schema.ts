
import {z} from "zod";

export const newsletterSchema = z.object({
    email: z
    .email("Please enter a valid email address")
    .nonempty("Email is required"),
});

//Infer the Typescript type directly from our Zod validation matrix
export type NewsletterFormValues = z.infer<typeof newsletterSchema>;