import { EmailVerificationFormValues, emailVerificationSchema } from "./schema";

export type ActionResponse = {
    success: boolean;
    message: string;
}

export async function submitEmailVerificationForm(data: EmailVerificationFormValues) : Promise<ActionResponse> {
    //Re-validate incoming client payloads on the server
    const validateFields = emailVerificationSchema.safeParse(data);

    if(!validateFields) {
        return {
            success: false,
            message: "Invalid verification code"
        }
    }

    //Process the valid data from here
    try {
        //Proces your data or API call here
        return {
            success: true,
            message: "Email verification successful. Please login to continue"
        }
    }
    catch(error) {
        return {
            success: false,
            message: "An error occured while processing email verification"
        }
    }
}

export async function resendCode() : Promise<ActionResponse> {

    try{
        //Porcess your data or API call
        return {
            success: true,
            message: "Email verification code sent. Please check your email."
        }
    }
    catch(error) {
        return {
            success: false,
            message: "An error occured"
        }
    }
}