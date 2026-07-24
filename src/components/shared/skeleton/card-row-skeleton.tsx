import { CardContent, CardDescription } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface cardProps {
    type: string,
    cardNumber: number
}

export function CardRowSkeleton({type, cardNumber} : cardProps) {
    return (
        <>
            {
                [...Array(cardNumber)].map((_, index) => (
                    <CardContent key={index} className={`flex gap-2 w-full h-[100px] py-0 md:py-2 first-of-type:border-t-0 last-of-type:border-b-0 md:border-b md:border-foreground/20 ${type === 'exclusive' ? 'border-none' : ''}`}>
                        <Skeleton className="flex-1 h-full rounded-none"/>
                        <CardDescription className="w-full h-full flex flex-2 flex-col gap-2 justify-start pt-1">
                            <Skeleton className="w-full h-2 rounded-none"/>
                            <Skeleton className="w-2/3 h-2 rounded-none"/>
                            <Skeleton className="w-1/3 h-2 rounded-none"/>
                        </CardDescription>
                    </CardContent>
                ))
            }
        </>
    )
}