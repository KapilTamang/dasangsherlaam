"use client";

import {z} from "zod";
import {useTransition, useState} from "react";
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
import { Spinner } from "@/components/ui/spinner";

export default function NewsLetterForm() {
    const [isPending, startTransition] = useTransition();
    
    const [isLoading, setIsLoading] = useState(false);
    
    const form  = useForm<z.infer<typeof newsletterSchema>>({
        resolver: zodResolver(newsletterSchema),
        defaultValues: {
            email: "",
            termsCheckbox: false
        },
    });

    const handleSubmit = async (data: NewsletterFormValues) => {
         setIsLoading(true);

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
                setIsLoading(false);
            });
        }, 3000)
    };

    return(
        <div className="flex flex-col gap-2">
             {
                isLoading && 
                    <span className="text-center">
                        <Button variant="ghost" size="lg">
                            <Spinner data-icon="inline-start" />
                            Processing...
                        </Button>
                    </span>         
            }
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <FieldGroup>
                    <Controller
                    name="email"
                    control={form.control}
                    render={({field, fieldState}) => (
                        <Field>
                            <ButtonGroup>
                                <Input {...field} id={field.name} type={field.name} aria-invalid={fieldState.invalid} placeholder="Enter your email" disabled={isLoading} className="border border-foreground/20"/>
                                <Button type="submit" disabled={isPending || isLoading} className="h-11 lg:h-12 text-[0.9rem] md:text-[1rem]">
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
                                    disabled={isLoading}
                                    className="border border-foreground/30"
                                />
                                <FieldLabel htmlFor={field.name} className="text-[0.9rem] md:text-[1rem] text-muted-foreground">
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