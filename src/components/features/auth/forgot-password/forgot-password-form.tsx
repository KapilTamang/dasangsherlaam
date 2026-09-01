"use client"

import React from "react"
import { useRouter } from "next/navigation"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import {Controller, useForm} from "react-hook-form";
import { forgotPasswordSchema, ForgotPasswordFormValues } from "@/actions/auth/forgot-password/schema";
import { Field, FieldError } from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { submitForgotPasswordForm } from "@/actions/auth/forgot-password/action";
import { toast } from "sonner";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import { Progress } from "@/components/ui/progress";
import { Mail, MailCheck, Send, ShieldCheck, CircleDashed } from "lucide-react";

export default function ForgotPasswordForm () {
    const router = useRouter();

    //Loading state
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    //Dilog state
    const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
    //Progress state
    const [progress, setProgress] = React.useState<number>(10);

    const form = useForm<z.infer<typeof forgotPasswordSchema>>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: ""
        }
    });

    React.useEffect(() => {
            if(isLoading) {
                const interval = setInterval(() => {
                    setProgress((prev) => Math.min(prev + 20, 90));
                }, 500);
    
                return () => clearInterval(interval)
            }
            else {
                const timer = setTimeout(() => {
                    setProgress(10);
                }, 1000)
                
                return () => clearTimeout(timer);
            }
        }, [isLoading, progress]);

    //Callback function to handle form submit
    const handleSubmit = async(data: ForgotPasswordFormValues) => {
        setIsLoading(true);
        setIsDialogOpen(true);
        //Simulating API call by adding timer
        const timer = setTimeout(() => {
            React.startTransition(async () => {
                const response = await submitForgotPasswordForm(data);

                if(response.success) {
                    router.push('/auth/email-verification');
                    form.reset();
                    toast.success(response.message);
                }
                else{
                    toast.error(response.message);
                }
                setProgress(100);
                setIsLoading(false);
                setIsDialogOpen(false);
            })
        }, 3000)
    } 

    return(
        <>
            <Dialog open={isDialogOpen}>
                <DialogContent className="sm:max-w-sm" showCloseButton={false}>
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 font-bold uppercase"><ShieldCheck className="inline text-primary" size={20}/>email confirmation request</DialogTitle>
                        <DialogDescription className="flex items-center gap-2 font-medium capitalize mt-1">
                                <CircleDashed className="inline text-muted-foreground animate-spin" size={16}/>
                            Submitting your email...</DialogDescription>
                        <Progress value={progress} className="w-full h-2 mt-2"/>
                        <DialogDescription className="italic">
                            Please wait while we confirm your email
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="relative flex flex-col px-6 lg:px-10 py-8 lg:py-12 w-full space-y-6 bg-background rounded-xl shadow-lg">
                 <span className="bg-accent px-4 py-2.5 flex gap-2 md:gap-4 justify-center items-start md:items-center text-[0.9rem] md:text-[1rem] font-normal capitalize rounded-sm">
                    <MailCheck className="w-6 h-6 text-primary"/>Submit your email
                </span>
                <span className="forgot-password-form-title absolute -top-5 left-5 md:left-8 bg-primary text-[0.9rem] lg:text-[1rem] font-bold text-card-featured-foreground uppercase px-4 py-1.5 rounded-md">forgot password ?</span>
                <div className="w-full flex flex-col gap-5">
                    <div>
                        <Controller 
                        name="email"
                        control={form.control}
                        render={({field, fieldState}) => (
                            <Field>
                                <InputGroup className="h-auto group relative">
                                    <InputGroupInput
                                    {...field}
                                    className="pl-10"
                                        id={field.name}
                                        name={field.name}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter Your Email"
                                        disabled={isLoading}
                                        />
                                        <Mail className="inline absolute left-3 top-[50%] translate-y-[-50%] w-5 h-5 text-muted-foreground group-focus-within:text-primary duration-300"/>
                                </InputGroup>
                                <FieldError>{form.formState.errors.email?.message}</FieldError>
                            </Field>
                        )}
                    />
                    </div>
                    <div className="w-full flex justify-end">
                        <Button variant="default" type="submit" className="capitalize cursor-pointer text-end" disabled={isLoading}>
                            <Send className="w-6 h-6 mr-0.5"/>Send
                        </Button>
                    </div>
                 </div>
            </form>
       </>
    )
}