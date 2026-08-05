"use client";

import React from "react";
import {z} from "zod";
import {Controller, useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormValues } from "@/actions/auth/login/schema";
import {Field, FieldGroup, FieldError} from "@/components/ui/field"
import { Button } from "@/components/ui/button";
import { submitLoginForm } from "@/actions/auth/login/action";
import {toast} from "sonner";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import {Progress} from "@/components/ui/progress";
import {LogIn, Send, ShieldUser, UserKey, Key, Mail, CircleDashed} from "lucide-react";

export function LoginForm () {
    //Loading state
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    //Dialog state
    const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
    //Progress state
    const [progress, setProgress] = React.useState<number>(10);

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email:"",
            password: ""
        }
    })

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
    const handleSubmit = async (data: LoginFormValues) => {
        setIsLoading(true);
        setIsDialogOpen(true);
        //Simulation API call by adding timer
        const timer = setTimeout(() => {
            React.startTransition(async () => {
                const response = await submitLoginForm(data);

                if(response.success) {
                    form.reset();
                    toast.success(response.message);
                }
                else {
                    toast.error(response.message);
                }
                setProgress(100);
                setIsLoading(false);
                setIsDialogOpen(false);
            })
        }, 3000)
    }

    return (
        <>
            <Dialog open={isDialogOpen}>
                <DialogContent className="sm:max-w-sm" showCloseButton={false}>
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 font-bold uppercase"><LogIn className="inline text-primary" size={20}/>login request</DialogTitle>
                        <DialogDescription className="flex items-center gap-2 font-medium capitalize mt-1">
                                <CircleDashed className="inline text-muted-foreground animate-spin" size={16}/>
                            Submitting login credentials...</DialogDescription>
                        <Progress value={progress} className="w-full h-2 mt-2"/>
                        <DialogDescription className="italic">
                            Please wait while attempting to login.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
             <form onSubmit={form.handleSubmit(handleSubmit)} className="relative flex flex-col px-6 lg:px-10 py-8 lg:py-12 w-full space-y-6 bg-background rounded-xl shadow-lg">
                <span className="contact-form-title absolute -top-5 left-5 md:left-8 bg-primary text-[0.9rem] lg:text-[1rem] font-bold text-card-featured-foreground uppercase px-4 py-1.5 rounded-md">login</span>
                <span className="flex gap-2 justify-center items-center text-[0.9rem] md:text-[1rem] capitalize font-normal">
                    <ShieldUser className="w-5 h-5 text-muted-foreground"/>welcome to dasang login
                </span>
                <FieldGroup>
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
                                        placeholder="Email"
                                        disabled={isLoading}
                                        />
                                        <Mail className="inline absolute left-3 top-[50%] translate-y-[-50%] w-5 h-5 text-muted-foreground group-focus-within:text-primary duration-300"/>
                                </InputGroup>
                                <FieldError>{form.formState.errors.email?.message}</FieldError>
                            </Field>
                        )}
                    />
                    <Controller 
                        name="password"
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
                                        placeholder="Password"
                                        disabled={isLoading}
                                    />
                                    <Key className="inline absolute left-3 top-[50%] translate-y-[-50%] w-5 h-5 text-muted-foreground group-focus-within:text-primary duration-300"/>
                                </InputGroup>
                                <FieldError>{form.formState.errors.password?.message}</FieldError>
                            </Field>
                        )}
                    />
                </FieldGroup>
                <FieldGroup className="items-end">
                    <Button variant="default" className="w-auto cursor-pointer" type="submit" disabled={isLoading}>
                        <Send className="w-6 h-6 mr-0.5"/>Login
                    </Button>
                </FieldGroup>
            </form>
        </>
    )
}