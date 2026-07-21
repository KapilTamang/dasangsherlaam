import { Skeleton } from '@/components/ui/skeleton'
import {ThumbsUp} from 'lucide-react'

interface LikeButtonProps {
    isLoading: Boolean
}

export default function LikeButton({isLoading}: LikeButtonProps) {
    return(
        <div className="like-button group flex gap-2 items-center bg-accent px-4 py-2 border-l border-l-primary cursor-pointer">
            {
                isLoading ? 
                (
                    <Skeleton className="bg-accent w-16 h-4 md:h-6 mt-4 md:mt-0"></Skeleton>
                ) :
                (
                    <>
                        <ThumbsUp className="text-primary fill-transparent group-hover:fill-primary duration-300" size={20}/>
                        <span className="like-button-count text-[1rem] text-foreground">(234)</span>
                    </>
                )
            }

        </div>
    )
}