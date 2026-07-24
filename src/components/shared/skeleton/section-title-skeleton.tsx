import { Skeleton } from "@/components/ui/skeleton"

export default function SectionTitleSkeleton() {
    return (
         <Skeleton className="border-t-2 bg-transparent border-primary w-full capitalize text-card-featured-foreground text-[1rem] font-bold rounded-none">
            <Skeleton className="w-25 h-6  capitalize px-4 py-1 rounded-none"></Skeleton>
        </Skeleton>
    )
}