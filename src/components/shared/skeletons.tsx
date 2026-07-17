import {Skeleton} from '@/components/ui/skeleton'
import {Card, CardContent, CardDescription} from '@/components/ui/card'

interface cardProps {
    type: string
    width: string
}
//Card featured skeleton
export function CardFeaturedSkeleton() {
    return (
        <CardContent className="flex flex-col w-full h-[430px] md:h-[500px]">
            <Skeleton className="aspect-video h-full rounded-none"/>
        </CardContent>
    )
}

//Card row skeleton
export function CardRowSkeleton({type} : cardProps) {
    return (
        <CardContent className={`flex gap-2 w-full h-[110px] py-0 md:py-2 first-of-type:border-t-0 last-of-type:border-b-0 md:border-b md:border-foreground/20 ${type === 'exclusive' ? 'border-none' : ''}`}>
            <Skeleton className="flex-1 h-full rounded-none"/>
            <CardDescription className="w-full h-full flex flex-2 flex-col gap-2 justify-start pt-4">
                <Skeleton className="w-full h-2 rounded-none"/>
                <Skeleton className="w-2/3 h-2 rounded-none"/>
                <Skeleton className="w-1/3 h-2 rounded-none"/>
            </CardDescription>
        </CardContent>
    )
}

//Card text skeleton
export function CardTextSkeleton() {
    return (
        // <Card className="w-full h-[80px] rounded-none">
            <CardContent className="flex flex-col gap-2 w-full h-[80px] rounded-none py-0 md:py-2 first-of-type:border-t-0 last-of-type:border-b-0 md:border-b md:border-foreground/20">
                <Skeleton className="w-full md:w-3/4 h-2 rounded-none"/>
                <Skeleton className="w-2/3 h-2 rounded-none"/>
                <Skeleton className="w-2/3 md:w-1/3 h-2 rounded-none"/>
            </CardContent>
        // </Card>
    )
}

//Card row large skeleton
export function CardRowLargeSkeleton() {
    return(
        <CardContent className="w-full h-[300px] md:h-[500px] flex flex-col md:flex-row gap-4 rounded-none bg-accent">
            <Skeleton className="flex-3 md:flex-1 w-full h-full rounded-none"/>
            <div className="flex flex-1">
                
            </div>
        </CardContent>
    )
}

//Card column skeleton\
export function CardColumnSkeleton({width}: cardProps) {
    return (
        <Card className={`min-w-[${width}px] rounded-none`}>
            <CardContent className="h-[430px] md:h-[400px] flex flex-col gap-6">
                <Skeleton className="flex-4 md:flex-3 rounded-none"/>
                <CardDescription className="w-full flex flex-col flex-1 gap-2">
                    <Skeleton className="w-full h-2"/>
                    <Skeleton className="w-full h-2"/>
                    <div className="flex gap-4">
                        <Skeleton className="w-full flex-1 h-2"/>
                        <Skeleton className="w-full flex-1 h-2"/>
                    </div>
                </CardDescription>
            </CardContent>
        </Card>
    )
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