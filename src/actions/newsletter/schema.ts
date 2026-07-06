
import {z} from "zod";

export const newsletterSchema = z.object({
    email: z
    .email("Please enter a valid email address"),
    termsCheckbox: 
    z.boolean()
    .refine((val) => val === true, {
        message: "You must accept the terms and condition."
    })
});

//Infer the Typescript type directly from our Zod validation matrix
export type NewsletterFormValues = z.infer<typeof newsletterSchema>;