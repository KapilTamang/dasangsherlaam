import {changePasswordSchema, ChangePasswordFormValues} from '@/actions/auth/change-password/schema'

export type ActionResponse = {
    success: boolean;
    message: string;
} 

export async function submitChangePasswordForm(data: ChangePasswordFormValues) : Promise<ActionResponse> {
    //Re-validate incoming client payloads on the server
    const validateFields = changePasswordSchema.safeParse(data); 

    if(!validateFields) {   
        return {
            success: false,
            message: "Invalid form data"
        }
    }
    else {
        //Process the validated data from here
        try{
            //Process your database or API call here
            return {
                success: true,
                message: "Password changed successfully! Please login to continue."
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