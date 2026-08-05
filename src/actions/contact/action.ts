import {ContactFormValues, contactSchema} from "./schema";

export type ActionResponse = {
    success: boolean;
    message: string;
}

export async function submitContactForm(data: ContactFormValues): Promise<ActionResponse> {
    //Re-validate the incoming client payloads on the server
    const validatedFields = contactSchema.safeParse(data);
    
    if (!validatedFields.success) {
        return {
            success: false,
            message: "Invalid form data",
        };
    }

    // Process the valid form data here
    // For example, save to a database or send an email
    try{
        //Process your database or API operations here
        return {
            success: true,
            message: "Thank You! Your Message has be sent successfully.",
        };
    } catch (error) {
        return {
            success: false,
            message: "An error occurred while processing the form.",
        };
    }
}