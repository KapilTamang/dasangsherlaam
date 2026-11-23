import { LucideIcon, TrendingDown, TrendingUp} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import IndicatorButton from "./indicator-button"

import { formatAnalyticsTime } from "@/lib/utils"

interface KPICardProps {
     data: {
        title: number,
        description: string,
        performance: string,
        badgeTitle: number,
        remarks: string,
        indicator: string,
        icon: LucideIcon
    }
}


export function KPICard({data}: KPICardProps) {

  return (
    <Card className="@container/card">
        <CardHeader>
            <CardDescription className="capitalize flex gap-2 items-center">
                <span className="bg-accent border border-primary rounded-full p-1.5">
                    <data.icon className="text-foreground" style={{width: '16px', height: '16px'}}/> 
                </span>
               {data.description}
            </CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {formatAnalyticsTime(data.title)}
            </CardTitle>
              <CardAction>
                <Badge variant="outline" className={`${data.performance === 'negative' ? 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300' : 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300' }`}>
                    {
                        data.performance === 'negative' ? 
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
        <CardContent className="flex gap-2 items-center">
            <IndicatorButton status={data.indicator}/>
            <div className="capitalize">
                {data.indicator}
            </div>
        </CardContent>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
                {data.remarks}
                {
                    data.performance === 'negative' ? 
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
                Based on weekly data.
            </div>
        </CardFooter>
    </Card>
  )
}
