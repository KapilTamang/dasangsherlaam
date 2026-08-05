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
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import {Progress} from "@/components/ui/progress";
import {Send, Rocket, CircleDashed, SendToBack} from "lucide-react";

export default function ContactForm () {
    //Loading state
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    //Dialog state
    const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
    //Progress state
    const [progress, setProgress] = React.useState<number>(10);

    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    });

    React.useEffect(() => {
        if (isLoading) {
            const timer = setInterval(() => {
                setProgress((prev) => Math.min(prev + 20, 90));
            }, 500);

            return () => clearInterval(timer);
        } 
        else {
            const timer = setTimeout(() => {
                setProgress(10);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [isLoading, progress]);

    //callback function to handle form submit
    const handleSubmit = async (data: ContactFormValues) => {
        setIsLoading(true);
        setIsDialogOpen(true);
        //Simulating API call by adding delay
        const timer =setTimeout(() => {
            React.startTransition(async () => {
                const response = await submitContactForm(data);

                if(response.success) {
                    form.reset();
                    toast.success(response.message);
                }
                else{
                    toast.error(response.message);
                }
                setProgress(100);
                setIsLoading(false);
                setIsDialogOpen(false);
            });
        }, 3000)
        //Clear timer if the component unmounts before the timer completes
        return () => clearTimeout(timer);
    }

    return(
        <>
            <Dialog open={isDialogOpen}>
                <DialogContent className="sm:max-w-sm" showCloseButton={false}>
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 font-bold uppercase"><Send className="inline text-primary" size={20}/>Message request</DialogTitle>
                        <DialogDescription className="flex items-center gap-2 font-medium capitalize mt-1">
                                <CircleDashed className="inline text-muted-foreground animate-spin" size={16}/>
                            Submitting your message...</DialogDescription>
                        <Progress value={progress} className="w-full h-2 mt-2"/>
                        <DialogDescription className="italic">
                            Please wait while we submit your message.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
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
                                        disabled={isLoading}
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
                                        disabled={isLoading}
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
                                        disabled={isLoading}
                                    />
                                </InputGroup>
                                <FieldError>{form.formState.errors.message?.message}</FieldError>
                            </Field>
                        )}
                    />
                </FieldGroup>
                <FieldGroup className="items-end">
                    <Button variant="default" className="w-auto cursor-pointer" type="submit" disabled={isLoading}>
                        <Send className="w-6 h-6 mr-0.5"/>Send
                    </Button>
                </FieldGroup>
                {/* <span className="text-center text-[0.9rem] md:text-[1rem] text-muted-foreground font-light capitalize">I appreciate your feedback!</span> */}
            </form>
        </>
    )
}