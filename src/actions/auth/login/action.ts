import { LoginFormValues, loginSchema  } from "./schema";

export type ActionResponse = {
    success: boolean;
    message: string;
}

export async function submitLoginForm(data: LoginFormValues): Promise<ActionResponse> {
    //Re-validate incoming client payloads on the server
    const validateFields = loginSchema.safeParse(data);

    if(!validateFields) {
        return {
            success: false,
            message: "Invalid form data"
        }
    }
    else{
        //Process the valid data from here
        try{
            //Process your database or API call here
            return {
                success: true,
                message: "Login success!"
            }
        }catch(error) {
            return {
                success: false,
                message: "An error occurend while processing the form."
            }
        }
    }
}