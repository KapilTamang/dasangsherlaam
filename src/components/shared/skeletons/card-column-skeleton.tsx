import {Skeleton} from '@/components/ui/skeleton'
import {Card, CardContent, CardDescription} from '@/components/ui/card'

interface cardProps {
    cardNumber: number,
    cardType: string
}

export default function CardColumnSkeleton ({cardNumber, cardType}: cardProps) {
    return (
        <>
            {[...Array(cardNumber)].map((_, index) => (
                <Card key={index} className={` ${cardType == 'grid' ? 'w-atuo' : 'min-w-[360px] md:min-w-xs'} rounded-none`}>
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
            ))}
        </>
    )
}