import { CardContent } from "@/components/ui/card";
import { Skeleton

 } from "@/components/ui/skeleton";
export function CardRowLargeSkeleton() {
    return(
        <CardContent className="w-full h-[450px] md:h-[500px] flex flex-col md:flex-row gap-4 rounded-none bg-accent">
            <Skeleton className="flex-1 w-full h-full rounded-none"/>
            <div className="flex flex-1"></div>
        </CardContent>
    )
}