"use client"

import React from 'react';
import { Share2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import { Button } from "@/components/ui/button";
import {FaFacebook, FaWhatsapp} from "react-icons/fa6"
import {toast} from "sonner";

interface SocialShareProps {
    isLoading: boolean
}

export default function SocialShare({isLoading}: SocialShareProps) {
    const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);

    //Share button click handler
    const handleClick = (media: string) => {
        toast.success(`Share success via ${media}`);
        isDialogOpen && setIsDialogOpen(false);
    }

    return(
        <div className="social-share flex gap-2 bg-accent px-4 py-2 border-l border-l-primary">
            {
                isLoading  ?
                (
                    <Skeleton className="bg-accent w-16 h-4 md:h-6 mt-4 md:mt-0"></Skeleton>
                ):
                (
                    <>
                        <Share2 className="text-primary fill-primary cursor-pointer" size={20} onClick={() => setIsDialogOpen(prev => !prev)}/>
                        <span className="social-share-count text-[1rem] text-foreground">(3456)</span>
                    </>
                )
            }
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-md text-[2rem]">
                    <DialogHeader>
                        <DialogTitle className="capitalize font-bold">Share blog via</DialogTitle>
                        <DialogDescription>
                           Your effort will help me reach more audiences. Thank you!
                        </DialogDescription>
                    </DialogHeader>
                    <Button variant="outline" className="capitalize cursor-pointer" onClick={() => handleClick("facebook")}>
                        <FaFacebook color="#1877f2" size={100}/>
                        facebook 
                    </Button>
                    <Button variant="outline" className="capitalize cursor-pointer" onClick={() => handleClick("whatsapp")}>
                        <FaWhatsapp color="#25D366"/>
                        whatsapp
                    </Button>
                </DialogContent>
            </Dialog>
        </div>
    )
}