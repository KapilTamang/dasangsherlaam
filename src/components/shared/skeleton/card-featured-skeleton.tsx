import { CardContent } from "@/components/ui/card";
import { Skeleton

 } from "@/components/ui/skeleton";
export function CardFeaturedSkeleton() {
    return (
        <CardContent className="flex flex-col w-full h-[430px] md:h-[450px]">
            <Skeleton className="aspect-video h-full rounded-none"/>
        </CardContent>
    )
}