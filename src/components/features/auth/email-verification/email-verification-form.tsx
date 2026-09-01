"use client"

import React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {Controller, useForm} from "react-hook-form"
import { EmailVerificationFormValues, emailVerificationSchema } from "@/actions/auth/email-verification/schema"
import { Button } from "@/components/ui/button"
import { submitEmailVerificationForm, resendCode } from "@/actions/auth/email-verification/action"
import {toast} from "sonner"
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/components/ui/dialog'
import { Progress } from "@/components/ui/progress"
import { MailCheck, CircleDashed, RectangleEllipsis } from "lucide-react"
import { Field, FieldError } from "@/components/ui/field"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import {InputOTP,InputOTPGroup,InputOTPSlot} from "@/components/ui/input-otp"
import { formatTime } from "@/lib/utils"

export default function EmailVerificationForm() {
    const router = useRouter();
    //Get the flow from the query parameters to determine if it's a registration or forgot-password flow
    const searchParams = useSearchParams();
    const flow = searchParams.get('flow') || 'registration'; // Default to 'registration' if no flow is provided

    //Loading state
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    //Verify dialog state
    const [isVerifyDialogOpen, setIsVerifyDialogOpen] = React.useState<boolean>(false);
    //Resend code dialog state
    const [isResendCodeDialogOpen, setIsResendCodeDialogOpen] = React.useState<boolean>(false);
    //Progress state
    const [progress, setProgress] = React.useState<number>(10);
    //Code expiry time
    const code_expiry_time = 300; //300 seconds = 5minutes
    //Expiry time tracking state
    const [timeLeft, setTimeLeft] = React.useState<number>(code_expiry_time);
    //Verification code state
    const [isCodeExpired, setIsCodeExpired] = React.useState<boolean>(false);
    //Email verification state
    const [isEmailVerified, setIsEmailVerified] = React.useState<boolean>(false);

    const form = useForm<z.infer<typeof emailVerificationSchema>>({
        resolver: zodResolver(emailVerificationSchema),
        defaultValues: {
            verificationCode: ""
        }
    })

    //Tracking verification expiry time
    React.useEffect(() => {
        if(timeLeft <= 0) {
            setIsCodeExpired(true);
            return
        }
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev-1)
        }, 1000);

        return ()=> clearInterval(timer);
    }, [timeLeft])

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
        setIsVerifyDialogOpen(true);
        //Simulation API call by adding timer
        const timer = setTimeout(() => {
            React.startTransition(async () => {
                const response = await submitEmailVerificationForm(data);

                if(response.success) {
                    if(flow === 'forgot-password') {
                        router.push('/auth/reset-password');
                    }
                    else {
                        router.push('/auth/login');
                    }

                    setIsEmailVerified(true);
                    toast.success(response.message);
                }
                else {
                    toast.error(response.message);
                }
                setProgress(100);
                setIsLoading(false);
                setIsVerifyDialogOpen(false);
            })
        }, 3000)
    }

    //Callback function to handle code resend
    const handleResendCode = async () => {
        setIsLoading(true);
        setIsResendCodeDialogOpen(true);
        const timer = setTimeout(() => {
            React.startTransition(async () => {
                const response = await resendCode();

                    if(response.success) {
                        form.reset();
                        toast.success(response.message);
                        setTimeLeft(code_expiry_time);
                        setIsCodeExpired(false);
                    }
                    else {
                        toast.error(response.message);
                    }
                    setProgress(100);
                    setIsLoading(false);
                    setIsResendCodeDialogOpen(false);
                })
        }, 3000)
    }
    
    return (
        <>
            {/* Dialog for submitting email verification code */}
            <Dialog open={isVerifyDialogOpen}>
                <DialogContent className="sm:max-w-sm" showCloseButton={false}>
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 font-bold uppercase"><MailCheck className="inline text-primary" size={20}/>email verification request</DialogTitle>
                        <DialogDescription className="flex items-center gap-2 font-medium capitalize mt-1">
                                <CircleDashed className="inline text-muted-foreground animate-spin" size={16}/>
                            Submitting email verification code...</DialogDescription>
                        <Progress value={progress} className="w-full h-2 mt-2"/>
                        <DialogDescription className="italic">
                            Please wait while attempting for email verificaion.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            {/* Dialog for submitting email verification code resend */}
            <Dialog open={isResendCodeDialogOpen}>
                <DialogContent className="sm:max-w-sm" showCloseButton={false}>
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 font-bold uppercase"><RectangleEllipsis className="inline text-primary" size={20}/>email verification code request</DialogTitle>
                        <DialogDescription className="flex items-center gap-2 font-medium capitalize mt-1">
                                <CircleDashed className="inline text-muted-foreground animate-spin" size={16}/>
                            Sending email verification code...</DialogDescription>
                        <Progress value={progress} className="w-full h-2 mt-2"/>
                        <DialogDescription className="italic">
                            Please wait while email verification code is sent.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="relative flex flex-col px-6 lg:px-10 py-8 lg:py-12 w-full space-y-6 bg-background rounded-xl shadow-lg">
                <span className="email-verification-form-title absolute -top-5 left-5 md:left-8 bg-primary text-[0.9rem] lg:text-[1rem] font-bold text-card-featured-foreground uppercase px-4 py-1.5 rounded-md">Email Verification</span>
                <span className="bg-accent px-2 py-2.5 flex gap-2 md:gap-4 justify-center items-start md:items-center text-[0.9rem] md:text-[1rem] font-normal capitalize rounded-sm">
                    <MailCheck className="w-6 h-6 text-primary"/>Enter 6 digits code to verify your email
                </span>
                <div className="w-full flex flex-col gap-5 justify-center items-center ">
                    <div>
                        <Controller 
                            name="verificationCode"
                            control={form.control}
                            render={({field, fieldState}) => (
                                <Field>
                                    <Field>
                                        <InputOTP 
                                        {...field}
                                        maxLength={6} 
                                        pattern={REGEXP_ONLY_DIGITS}
                                        id={field.name}
                                        name={field.name}
                                        aria-invalid={fieldState.invalid}
                                        disabled={isCodeExpired || isEmailVerified}
                                        >
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
                                    <FieldError>{form.formState.errors.verificationCode?.message}</FieldError>
                                </Field>
                            )}
                        />
                    </div>
                    <div className={`verification-code-expiry-timer ${isEmailVerified ? 'hidden' : 'flex'} text-[0.9rem] md:text-[1rem] capitalize`}>
                        {
                            isCodeExpired && !isEmailVerified ? 
                            (
                               <span className="text-muted-foreground">code expired! Please request a new one.</span>
                            ):
                            (
                                <span>Your code expires in: <span className="font-bold">{formatTime(timeLeft)}</span></span>
                            )
                        }
                    </div>
                    <div className="w-full flex gap-2 justify-between">
                        <span>
                            <Button variant="outline" type="button" className="capitalize cursor-pointer" disabled={!isCodeExpired && timeLeft > 0 || isEmailVerified} onClick={handleResendCode}>
                                resend code
                            </Button>
                        </span>
                        <span>
                            <Button variant="default" type="submit" className="capitalize cursor-pointer" disabled={isCodeExpired || isEmailVerified}>
                                verify email
                            </Button>
                        </span>
                    </div>
                    
                 </div>
            </form>
        </>
    )
}