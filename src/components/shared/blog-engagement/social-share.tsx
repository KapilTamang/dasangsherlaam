import { Share2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface SocialShareProps {
    isLoading: Boolean
}

export default function SocialShare({isLoading}: SocialShareProps) {
    return(
        <div className="social-share group flex gap-2 bg-accent px-4 py-2 border-l border-l-primary cursor-pointer">
            {
                isLoading  ?
                (
                    <Skeleton className="bg-accent w-16 h-4 md:h-6 mt-4 md:mt-0"></Skeleton>
                ):
                (
                    <>
                        <Share2 className="text-primary fill-transparent group-hover:fill-primary duration-300" size={20}/>
                        <span className="social-share-count text-[1rem] text-foreground">(3456)</span>
                    </>
                )
            }
        </div>
    )
}