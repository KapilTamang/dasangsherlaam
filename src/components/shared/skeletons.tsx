import {Skeleton} from '@/components/ui/skeleton'

interface cardProps {
    type: string,
    cards: number
}



// Image Skeleton
export function ImageSkeleton() {
    return(
        <Skeleton className="bg-primary h-[260px] sm:h-[400px] md:h-[260px] lg:h-[350px] rounded-none"/>
    )
}

// Single blog skeleton
export function SingleBlogSkeleton() {
    return (
        <div className="w-full flex-3 bg-transparent shadow-none">
            <div className="flex flex-col gap-2">
                <Skeleton className="bg-primary h-[260px] rounded-none block md:hidden"/>
                <Skeleton className="w-full hidden md:flex gap-6 justify-between h-11 bg-accent rounded-none">
                    <Skeleton className="flex-1 rounded-none"/>
                    <Skeleton className="flex-5 rounded-none bg-accent"/>
                </Skeleton>
                <Skeleton className="w-full h-14 border-l-2 border-l-primary/50 bg-accent rounded-none"/>
                <Skeleton className="w-full h-[400px] md:h-screen flex flex-col gap-10 p-5 bg-accent rounded-none"/>
            </div>
        </div>
    )
}