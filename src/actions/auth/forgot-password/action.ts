import { ForgotPasswordFormValues, forgotPasswordSchema } from "./schema";

export type ActionResponse = {
    success: boolean;
    message: string;
}

export async function submitForgotPasswordForm(data: ForgotPasswordFormValues): Promise<ActionResponse> {
    // Re-validate incoming client payloads on the server
    const validateFields = forgotPasswordSchema.safeParse(data);

    if(!validateFields) {
        return {
            success: false,
            message: "Invalid form data."
        }
    }
    else{
        //Process the valid data from here
        try {
            //Process your database or API call here
            return {
                success: true,
                message: "Confirmation success! Please check your email for verification code."
            }
        }
        catch(error) {
            return {
                success: false,
                message: "An error occured while processing the form."
            }
        }
    }
} 