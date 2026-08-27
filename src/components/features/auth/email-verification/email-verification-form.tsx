"use client"

import React from "react"
import Link from "next/link"
import {z} from "zod"
import {Controller, useForm} from "react-hook-form"
import { EmailVerificationFormValues, emailVerificationSchema } from "@/actions/auth/email-verification/schema"
import { Button } from "@/components/ui/button"
import { submitEmailVerificationForm } from "@/actions/auth/email-verification/action"
import {toast} from "sonner"
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/components/ui/dialog'
import { Progress } from "@/components/ui/progress"
import { MailCheck, CircleDashed, ShieldUser } from "lucide-react"
import { Field, FieldLabel } from "@/components/ui/field"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import {InputOTP,InputOTPGroup,InputOTPSlot} from "@/components/ui/input-otp"

export default function EmailVerificationForm() {
    //Loading state
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    //Dialog state
    const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
    //Progress state
    const [progress, setProgress] = React.useState<number>(10);

    const form = useForm<z.infer<typeof emailVerificationSchema>>({

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
        const handleSubmit = async (data: EmailVerificationFormValues) => {
            setIsLoading(true);
            setIsDialogOpen(true);
            //Simulation API call by adding timer
            const timer = setTimeout(() => {
                React.startTransition(async () => {
                    const response = await submitEmailVerificationForm(data);
    
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
                        <DialogTitle className="flex items-center gap-2 font-bold uppercase"><MailCheck className="inline text-primary" size={20}/>login request</DialogTitle>
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
            <div  className="relative flex flex-col px-6 lg:px-10 py-8 lg:py-12 w-full space-y-6 bg-background rounded-xl shadow-lg">
                <span className="email-verification-form-title absolute -top-5 left-5 md:left-8 bg-primary text-[0.9rem] lg:text-[1rem] font-bold text-card-featured-foreground uppercase px-4 py-1.5 rounded-md">Email Verification</span>
                <span className="bg-accent py-2.5 flex gap-4 justify-center items-center text-[1rem] font-normal capitalize rounded-sm">
                    <MailCheck className="w-6 h-6 text-primary"/>Enter 6 digits code to verify your email
                </span>
                <div className="w-full flex justify-center items-center">
                    <Field>
                        <InputOTP id="digits-only" maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                    </Field>
                 </div>
            </div>
        </>
    )
}