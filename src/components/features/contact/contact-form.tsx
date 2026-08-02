"use client"

import React from "react";
import {z} from "zod";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { contactSchema, ContactFormValues } from "@/actions/contact/schema";
import {Field,FieldGroup, FieldLabel, FieldError} from "@/components/ui/field";
import {Button} from "@/components/ui/button";
import {submitContactForm} from "@/actions/contact/action";
import { toast } from "sonner";
import { InputGroup, InputGroupInput, InputGroupTextarea } from "@/components/ui/input-group";
import { Send, Rocket} from "lucide-react";

export default function ContactForm () {
    //Loading state
    const [isLoading, setIsLoading] = React.useState<Boolean>(false);

    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    });

    //callback function to handle form submit
    const handleSubmit = async (data: ContactFormValues) => {
        setIsLoading(true)
        //Simulating API call by adding delay
        setTimeout(() => {
            React.startTransition(async () => {
                const response = await submitContactForm(data);

                if(response.success) {
                    form.reset();
                    toast.success(response.message);
                }
                else{
                    toast.error(response.message);
                }
                setIsLoading(false);
            });
        }, 3000)
    }

    return(
        <form onSubmit={form.handleSubmit(handleSubmit)} className="relative flex flex-col px-6 lg:px-10 py-8 lg:py-12 w-full space-y-6 bg-background rounded-xl shadow-lg">
            <span className="contact-form-title absolute -top-5 left-5 md:left-8 bg-primary text-[0.9rem] lg:text-[1rem] font-bold text-card-featured-foreground uppercase px-4 py-1.5 rounded-md">contact</span>
            <span className="flex gap-2 justify-center items-center text-[0.9rem] md:text-[1rem] text-muted-foreground font-normal italic">
                <Rocket className="w-5 h-5 text-primary fill-primary"/> Please feel free to reach out!
            </span>
            <FieldGroup>
                <Controller 
                    name="name"
                    control={form.control}
                    render={({field, fieldState}) => (
                        <Field>
                           <FieldLabel htmlFor="name">Full Name</FieldLabel>
                            <InputGroup className="h-auto">
                                <InputGroupInput
                                 {...field}
                                    id={field.name}
                                    name={field.name}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Enter your name"
                                    />
                            </InputGroup>
                            <FieldError>{form.formState.errors.name?.message}</FieldError>
                        </Field>
                    )}
                />
                <Controller 
                    name="email"
                    control={form.control}
                    render={({field, fieldState}) => (
                        <Field>
                            <FieldLabel htmlFor="email">Email</FieldLabel>
                            <InputGroup className="h-auto">
                                <InputGroupInput
                                 {...field}
                                    id={field.name}
                                    name={field.name}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Enter your email"
                                    />
                            </InputGroup>
                            <FieldError>{form.formState.errors.email?.message}</FieldError>
                        </Field>
                    )}
                />
                <Controller 
                    name="message"
                    control={form.control}
                    render={({field, fieldState}) => (
                        <Field>
                            <FieldLabel htmlFor="message">Message</FieldLabel>
                            <InputGroup>
                                <InputGroupTextarea className="h-25"
                                {...field}
                                    id={field.name}
                                    name={field.name}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Type your message here..."
                                />
                            </InputGroup>
                            <FieldError>{form.formState.errors.message?.message}</FieldError>
                        </Field>
                    )}
                />
            </FieldGroup>
            <FieldGroup className="items-end">
                <Button variant="default" className="w-auto cursor-pointer" type="submit">
                    <Send className="w-6 h-6 mr-0.5"/>Send
                </Button>
            </FieldGroup>
            {/* <span className="text-center text-[0.9rem] md:text-[1rem] text-muted-foreground font-light capitalize">I appreciate your feedback!</span> */}
        </form>
    )
}