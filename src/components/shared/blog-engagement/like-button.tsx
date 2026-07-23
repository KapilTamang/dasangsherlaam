"use client"

import React from 'react';
import { Skeleton } from '@/components/ui/skeleton'
import {ThumbsUp} from 'lucide-react'
import {toast} from 'sonner'
import {Tooltip, TooltipContent, TooltipTrigger} from '@/components/ui/tooltip';

interface LikeButtonProps {
    isLoading: Boolean
}

export default function LikeButton({isLoading}: LikeButtonProps) {

    const [isLiked, setIsLiked] = React.useState<boolean>(false);

    const handleClick = () => {
        //Check liked state to change it and initiate the toast message
       if(!isLiked) {
            setIsLiked(true);
            toast.success("Thank you for the post like");
       }
       else {
            setIsLiked(false);
            toast.warning("Post uliked")
       }
    }

    return(
        <div className="like-button flex gap-2 items-center bg-accent px-4 py-2 border-l border-l-primary">
            {
                isLoading ? 
                (
                    <Skeleton className="bg-accent w-16 h-4 md:h-6 mt-4 md:mt-0"></Skeleton>
                ) :
                (
                    <>
                        <Tooltip>
                            <TooltipTrigger>
                                <ThumbsUp className={`text-primary ${isLiked ? 'fill-primary' : 'fill-transparent'} cursor-pointer`} size={20} onClick={handleClick}/>
                            </TooltipTrigger>
                            <TooltipContent>Like</TooltipContent>
                        </Tooltip>
                        <span className="like-button-count text-[1rem] text-foreground">(234)</span>
                    </>
                )
            }

        </div>
    )
}