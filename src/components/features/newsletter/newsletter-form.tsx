"use client";

import React from "react";
import {z} from "zod";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {newsletterSchema, NewsletterFormValues} from "@/actions/newsletter/schema";
import {submitNewsletterForm} from "@/actions/newsletter/action";
import {Field,FieldGroup, FieldLabel, FieldError} from "@/components/ui/field" 
import {Button} from "@/components/ui/button";
import {ButtonGroup} from "@/components/ui/button-group";
import {Input} from "@/components/ui/input";
import {toast} from "sonner";
import {Checkbox} from "@/components/ui/checkbox";
import {Progress} from "@/components/ui/progress";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import {MailPlus, CircleDashed} from "lucide-react";

export default function NewsLetterForm() {
    const [isPending, startTransition] = React.useTransition();
    const [isLoading, setIsLoading] = React.useState(false);
    //State for progress bar
    const [progress, setProgress] = React.useState(10);
    //State for dialog
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);

    //User subscription state
    const isSubscribed = false;
    const isLoggedIn = false;
    
    const form  = useForm<z.infer<typeof newsletterSchema>>({
        resolver: zodResolver(newsletterSchema),
        defaultValues: {
            email: "",
            termsCheckbox: false
        },
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
        }
    },[isLoading, progress]);


    const handleSubmit = async (data: NewsletterFormValues) => {
        setIsLoading(true);
        setIsDialogOpen(true);
        //Simulating API call by adding delay
        setTimeout(() => {
            startTransition(async () => {
                const response = await submitNewsletterForm(data);
                
                if (response.success) {
                    form.reset();
                    toast.success(response.message)
                }else{
                    toast.error(response.message)
                }
                setProgress(100);
                setIsLoading(false);
                setIsDialogOpen(false);
            });
        }, 3000)
    };

    return(
        <div className="flex flex-col gap-2">
             {
                <Dialog open={isDialogOpen}>
                    <DialogContent className="sm:max-w-sm" showCloseButton={false}>
                        <DialogHeader>
                            <DialogTitle className="flex items-center gap-2 font-bold uppercase"><MailPlus className="inline text-primary" size={20}/>Subscription request</DialogTitle>
                            <DialogDescription className="flex items-center gap-2 font-medium capitalize mt-1">
                                 <CircleDashed className="inline text-muted-foreground animate-spin" size={16}/>
                                Processing your request...</DialogDescription>
                            <Progress value={progress} className="w-full h-2 mt-2"/>
                            <DialogDescription className="italic">
                                Please wait while we submit your request.
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            }
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                <FieldGroup>
                    <Controller
                    name="email"
                    control={form.control}
                    render={({field, fieldState}) => (
                        <Field>
                            <ButtonGroup>
                                <Input {...field} id={field.name} type={field.name} aria-invalid={fieldState.invalid} placeholder="Enter your email" disabled={isLoading || (isLoggedIn && isSubscribed)} className="border border-foreground/20"/>
                                <Button type="submit" disabled={(isPending || isLoading) || (isLoggedIn && isSubscribed)} className="h-11 lg:h-12 text-[0.9rem] md:text-[1rem]">
                                    Subscribe 
                                </Button>
                            </ButtonGroup>
                            {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                        </Field>
                        )}
                    />
                    <Controller
                    name="termsCheckbox"
                    control={form.control}
                    render={({field, fieldState}) => (
                        <>
                            <Field 
                            orientation="horizontal" 
                            data-invalid={fieldState.invalid}
                            className="gap-2">
                                {/* Map react-hook-form checkbox field to component props without passing `value` (causes type conflict) */}
                                <Checkbox
                                    id={field.name}
                                    aria-invalid={fieldState.invalid}
                                    checked={!!field.value}
                                    onCheckedChange={(v) => field.onChange(!!v)}
                                    ref={field.ref}
                                    disabled={isLoading || (isLoggedIn && isSubscribed)}
                                    className="border border-foreground/30"
                                />
                                <FieldLabel htmlFor={field.name} className="text-muted-foreground">
                                    I agree to the terms and conditions
                                </FieldLabel>
                            </Field>
                            {fieldState.error && <FieldError className="-mt-4">{fieldState.error.message}</FieldError>}
                        </>
                    )}
                    />
                </FieldGroup>
            </form>
        </div>
    )
}