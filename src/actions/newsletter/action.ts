"use server"

import {NewsletterFormValues, newsletterSchema} from "@/actions/newsletter/schema";

export type ActionResponse = {
    success: boolean;
    message: string;
}

export async function submitNewsletterForm(data: NewsletterFormValues): Promise<ActionResponse> {
    //Re-validate the incoming client payloads on the server
    const validatedFields = newsletterSchema.safeParse(data);
    
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
            message: "Newsletter subscription submitted successfully",
        };
    } catch (error) {
        return {
            success: false,
            message: "An error occurred while processing the form",
        };
    }
}