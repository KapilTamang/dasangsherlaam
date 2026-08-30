import z from "zod"

export const resetPasswordSchema = z.object({
    password:
    z.string()
    .min(8, "Password must be atleast 8 character long"),
    confirmPassword: 
    z.string()
    .min(1, "Please confirm your password")
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"]
});

// Infer the typescript directly from our zod validation matrix
export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;