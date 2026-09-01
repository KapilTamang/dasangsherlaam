"use client"

import React from "react";
import { useRouter } from "next/navigation";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {Controller, useForm} from "react-hook-form";
import { resetPasswordSchema, ResetPasswordFormValues } from '@/actions/auth/reset-password/schema';
import {Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { submitResetPasswordForm } from "@/actions/auth/reset-password/action";
import {toast} from "sonner";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import { Progress } from "@/components/ui/progress";
import { CircleDashed, RotateCcwKey, RotateCcw, Key } from "lucide-react";

export default function ResetPasswordForm() {
    const router = useRouter();

    //Loading state
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    //Dialog state
    const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
    
    //Progress state
    const [progress, setProgress] = React.useState<number>(10);

    const form = useForm<z.infer<typeof resetPasswordSchema>>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
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

    //Callback function to handle form submit
    const handleSubmit = async (data: ResetPasswordFormValues) => {
        setIsLoading(true);
        setIsDialogOpen(true);
        //Simulating API call by adding a timer
        const timer = setTimeout(() => {
            React.startTransition(async () => {
                const response = await submitResetPasswordForm(data);

                if(response.success) {
                    router.push('/auth/login');
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
                        <DialogTitle className="flex items-center gap-2 font-bold uppercase"><RotateCcwKey className="inline text-primary" size={20}/>password reset request</DialogTitle>
                        <DialogDescription className="flex items-center gap-2 font-medium capitalize mt-1">
                            <CircleDashed className="inline text-muted-foreground animate-spin" size={16}/>
                            Submitting your password reset request..</DialogDescription>
                        <Progress value={progress} className="w-full h-2 mt-2"/>
                        <DialogDescription className="italic">
                            Please wait while password is being reset.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="relative flex flex-col px-6 lg:px-10 py-8 lg:py-12 w-full space-y-6 bg-background rounded-xl shadow-lg">
                <span className="reset-password-form-title absolute -top-5 left-5 md:left-8 bg-primary text-[0.9rem] lg:text-[1rem] font-bold text-card-featured-foreground uppercase px-4 py-1.5 rounded-md">reset password</span>
                <span className="bg-accent py-2.5 flex gap-2 justify-center items-center text-[1rem] md:text-[1.1rem] font-bold capitalize rounded-sm">
                    <RotateCcwKey className="w-6 h-6 text-primary"/>enter your new password
                </span>
                <FieldGroup>
                    <Field>
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
                                            type="password"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="New Password"
                                            disabled={isLoading}
                                        />
                                        <Key className="inline absolute left-3 top-[50%] translate-y-[-50%] w-5 h-5 text-muted-foreground group-focus-within:text-primary duration-300"/>
                                    </InputGroup>
                                    <FieldError>{form.formState.errors.password?.message}</FieldError>
                                </Field>
                            )}
                        />
                    </Field>
                    <Field>
                        <Controller 
                            name="confirmPassword"
                            control={form.control}
                            render={({field, fieldState}) => (
                                <Field>
                                    <InputGroup className="h-auto group relative">
                                        <InputGroupInput
                                        {...field}
                                            className="pl-10"
                                            id={field.name}
                                            name={field.name}
                                            type="password"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Confirm New Password"
                                            disabled={isLoading}
                                        />
                                        <Key className="inline absolute left-3 top-[50%] translate-y-[-50%] w-5 h-5 text-muted-foreground group-focus-within:text-primary duration-300"/>
                                    </InputGroup>
                                    <FieldError>{form.formState.errors.confirmPassword?.message}</FieldError>
                                </Field>
                            )}
                        />
                    </Field>
                    <Field>
                        <Button variant="default" className="uppercase cursor-pointer" type="submit" disabled={isLoading}>
                            <RotateCcw className="w-6 h-6 mr-0.5"/>Reset
                        </Button>
                    </Field>
                </FieldGroup>
            </form>
        </>
    )
}