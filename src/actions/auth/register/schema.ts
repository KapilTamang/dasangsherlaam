import {z} from "zod";

export const registerSchema = z.object({
    name:
    z.string().min(2, "Name must be at least 2 characters long").max(50, "Name must be at most 50 characters long"),
    email: 
    z.email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
    confirmPassword: z
      .string()
      .min(1, "Please confirm your password")
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

// Infer the typescript type directly from our zod validation matrix
export type RegisterFormValues = z.infer<typeof registerSchema>;