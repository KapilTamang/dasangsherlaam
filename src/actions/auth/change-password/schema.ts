import z from "zod"

export const changePasswordSchema = z.object({
    currentPassword:
    z.string().min(8, "Current password must be atleast 8 character long"),
    newPassword:
    z.string().min(8, "New password must be atleast 8 character long"),     
    confirmNewPassword: 
    z.string().min(1, "Please confirm your new password")
}).refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "New password do not match",   
});

export type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>;