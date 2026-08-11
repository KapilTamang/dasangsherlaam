import {RegisterFormValues, registerSchema} from './schema';

export type ActionResponse = {
    success: boolean;
    message: string;
}

export async function submitRegisterForm(data: RegisterFormValues) : Promise<ActionResponse> {
    //Re-validate incoming client payloads on the server
    const validateFields = registerSchema.safeParse(data);

    console.log(data);

    if(!validateFields) {
        return {
            success: false,
            message: 'Invalid form data'
        }
    }
    //Process the validated data from here
    try{
        //Process your data API call here
        return {
            success: true,
            message: "Email verification link send. Please check your email to verify."
        }
    }catch(error) {
        return {
            success: false,
            message: 'An error occured while processing the form.'
        }
    }
}