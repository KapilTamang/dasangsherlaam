import { TrendingDown, TrendingUp} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface KPICardProps {
    selectedPeriod: {
        id: string,
        title: string,
        value: string,
        duration: string,
    },
     data: {
        title: string,
        description: string,
        badgeTitle: number,
        trending: string,
        remarks: string
    }
}


export function KPICard({ selectedPeriod, data }: KPICardProps) {

  return (
    <Card className="@container/card">
        <CardHeader>
            <CardDescription className="capitalize">{data.description}</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {data.title}
            </CardTitle>
            <CardAction>
                <Badge variant="outline" className={`${data.trending === 'negative' ? 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300' : 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300' }`}>
                    {
                        data.trending === 'negative' ? 
                        (
                            <><TrendingDown/> -</>
                        )
                        :
                        (
                            <><TrendingUp/> +</>
                        )
                    }
                    {data.badgeTitle}%
                </Badge>
            </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
                {data.remarks} this {selectedPeriod.duration}
                {
                    data.trending === 'negative' ? 
                    (   
                         <TrendingDown className="size-4"/>
                    )
                    :(
                        <>
                            <TrendingUp className="size-4"/>
                        </>
                    )
                }
            </div>
            <div className="text-muted-foreground">
                {data.description} for the last {selectedPeriod.duration}
            </div>
        </CardFooter>
    </Card>
  )
}
