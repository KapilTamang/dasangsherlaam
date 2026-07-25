import { CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface cardProps {
    cardNumber: number
}

export function CardTextSkeleton({cardNumber}: cardProps) {
    return (
        <>
            {
                [...Array(cardNumber)].map((_, index) => (
                    <CardContent key={index} className="flex flex-col gap-2 w-full h-[80px] rounded-none py-0 md:py-2 first-of-type:border-t-0 last-of-type:border-b-0 md:border-b md:border-foreground/20">
                        <Skeleton className="w-full md:w-3/4 h-2 rounded-none"/>
                        <Skeleton className="w-2/3 h-2 rounded-none"/>
                        <Skeleton className="w-2/3 md:w-1/3 h-2 rounded-none"/>
                    </CardContent>
                ))
            }   
       </>
    )
}