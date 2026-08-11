"use client"

import React from "react";
import Link from "next/link";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {Controller, useForm} from "react-hook-form";
import {registerSchema, RegisterFormValues} from '@/actions/auth/register/schema';
import {Field,FieldLabel, FieldGroup,FieldDescription, FieldError, FieldSeparator} from "@/components/ui/field"
import { Button } from "@/components/ui/button";
import { submitRegisterForm } from "@/actions/auth/register/action";
import {toast} from "sonner";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import {Progress} from "@/components/ui/progress";
import {UserPlus, Send, Key, ShieldUser, Mail, CircleDashed} from "lucide-react";
import { FaGoogle, FaFacebookF } from "react-icons/fa6";

export function RegisterForm() {
    //Loading state
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    //Dialog state
    const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
    //Progress state
    const [progress, setProgress] = React.useState<number>(10);

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
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
    
    //callback function to handle form submit
    const handleSubmit = async (data: RegisterFormValues) => {
        setIsLoading(true);
        setIsDialogOpen(true);
        //Simulation API call by adding timer
        const timer = setTimeout(() => {
            React.startTransition(async () => {
                const response = await submitRegisterForm(data);

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

     return(
        <>
            <Dialog open={isDialogOpen}>
                <DialogContent className="sm:max-w-sm" showCloseButton={false}>
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 font-bold uppercase"><UserPlus className="inline text-primary" size={20}/>registration processing</DialogTitle>
                        <DialogDescription className="flex items-center gap-2 font-medium capitalize mt-1">
                                <CircleDashed className="inline text-muted-foreground animate-spin" size={16}/>
                            Submitting form request..</DialogDescription>
                        <Progress value={progress} className="w-full h-2 mt-2"/>
                        <DialogDescription className="italic">
                            Please wait while attempting to register.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="relative flex flex-col px-6 lg:px-10 py-8 lg:py-12 w-full space-y-6 bg-background rounded-xl shadow-lg">
                <span className="contact-form-title absolute -top-5 left-5 md:left-8 bg-primary text-[0.9rem] lg:text-[1rem] font-bold text-card-featured-foreground uppercase px-4 py-1.5 rounded-md">sign up</span>
                <span className="bg-accent py-2.5 flex gap-2 justify-center items-center text-[1rem] md:text-[1.1rem] font-bold rounded-sm">
                    <ShieldUser className="w-6 h-6 text-primary"/>Create your account
                </span>
                <FieldGroup>
                    <Controller 
                        name="name"
                        control={form.control}
                        render={({field, fieldState}) => (
                            <Field>
                                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                                <InputGroup className="h-auto group">
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
                                <FieldLabel htmlFor="name">Email</FieldLabel>
                                <InputGroup className="h-auto group">
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
                    <Field className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Controller 
                            name="password"
                            control={form.control}
                            render={({field, fieldState}) => (
                                <Field>
                                    <FieldLabel htmlFor="name">Password</FieldLabel>
                                    <InputGroup className="h-auto group">
                                        <InputGroupInput
                                        {...field}
                                            id={field.name}
                                            name={field.name}
                                            type="password"
                                            placeholder="Password"
                                            aria-invalid={fieldState.invalid}
                                            disabled={isLoading}
                                        />
                                    </InputGroup>
                                    <FieldError>{form.formState.errors.password?.message}</FieldError>
                                </Field>
                            )}
                        />
                        <Controller 
                            name="confirmPassword"
                            control={form.control}
                            render={({field, fieldState}) => (
                                <Field>
                                    <FieldLabel htmlFor="name">Confirm password</FieldLabel>
                                    <InputGroup className="h-auto group relative">
                                        <InputGroupInput
                                        {...field}
                                            id={field.name}
                                            name={field.name}
                                            type="password"
                                            placeholder="Confirm Password"
                                            aria-invalid={fieldState.invalid}
                                            disabled={isLoading}
                                        />
                                    </InputGroup>
                                    <FieldError>{form.formState.errors.confirmPassword?.message}</FieldError>
                                </Field>
                            )}
                        />
                    </Field>
                    <Field className="flex flex-col gap-5 mt-1">
                        <Button variant="default" className="uppercase cursor-pointer" type="submit" disabled={isLoading}>
                            <Send className="w-6 h-6 mr-0.5"/>create account
                        </Button>
                        <FieldDescription className="text-center">
                            Already have an account? <Link href="/auth/login">Sign in</Link>
                        </FieldDescription>
                        <FieldDescription className="px-6 text-center">
                            By clicking continue, you agree to our <Link href="#">Terms of Service</Link>{" "}
                            and <Link href="/privacy-policy">Privacy Policy</Link>.
                        </FieldDescription>
                    </Field>
                </FieldGroup>
            </form>
        </>
    )
}