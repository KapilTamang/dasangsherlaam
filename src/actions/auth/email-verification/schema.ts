import {z} from "zod"

export const emailVerificationSchema = z.object({
    verificationCode: z
    .string("Please enter verification code to continue.")
    .length(6, "Verification code must be exactly 6 digits")
    .regex(/^\d+$/, "Must contain only digits")
});

//Infer the typescript type directly from our Zod validation matrix
export type EmailVerificationFormValues = z.infer<typeof emailVerificationSchema>