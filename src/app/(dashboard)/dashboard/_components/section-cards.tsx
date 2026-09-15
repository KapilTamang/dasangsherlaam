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

export function SectionCards() {

    const visitors = {
        title: '5.34K',
        description: 'visitors',
        badgeTitle: 12.5,
        trending: 'positive',
        duration: '1 month'
    }

    const pageViews = {
        title: '32.345K',
        description: 'page views',
        badgeTitle: 20,
        trending: 'negative',
        duration: '1 month'
    }

    const registered = {
        title: '3.2K',
        description: 'registered',
        badgeTitle: 5.2,
        trending: 'positive',
        duration: '1 month'
    }

    const subscribers = {
        title: '2.6K',
        description: 'subscribers',
        badgeTitle: 17,
        trending: 'positive',
        duration: '1 month'
    }

  return (
    <div className="grid grid-cols-1 gap-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
        {/* Card for visitors */}
        <Card className="@container/card">
            <CardHeader>
                <CardDescription className="capitalize">{visitors.description}</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    {visitors.title}
                </CardTitle>
                <CardAction>
                    <Badge variant="outline" className={`${visitors.trending === 'negative' ? 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300' : 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300' }`}>
                        {
                            visitors.trending === 'negative' ? 
                            (
                                <><TrendingDown/> -</>
                            )
                            :
                            (
                                <><TrendingUp/> +</>
                            )
                        }
                        {visitors.badgeTitle}%
                    </Badge>
                </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                    {
                        visitors.trending === 'negative' ? 
                        (   
                            <>
                                <span>Trending down this month </span>
                                <TrendingDown className="size-4"/>
                            </>
                        )
                        :(
                            <>
                                <span>Trending up this month </span>
                                <TrendingUp className="size-4"/>
                            </>
                        )
                    }
                </div>
                <div className="text-muted-foreground">
                    Visitors for the last {visitors.duration}
                </div>
            </CardFooter>
        </Card>
        {/* Card for pageviews */}
        <Card className="@container/card">
            <CardHeader>
                <CardDescription className="capitalize">{pageViews.description}</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    {pageViews.title}
                </CardTitle>
                <CardAction>
                   <Badge variant="outline" className={`${pageViews.trending === 'negative' ? 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300' : 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300' }`}>
                        {
                            pageViews.trending === 'negative' ? 
                            (
                                <><TrendingDown/> -</>
                            )
                            :
                            (
                                <><TrendingUp/> +</>
                            )
                        }
                        {pageViews.badgeTitle}%
                    </Badge>
                </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                    {
                        pageViews.trending === 'negative' ? 
                        (   
                            <>
                                <span>Down {pageViews.badgeTitle}% this month</span>
                                <TrendingDown className="size-4"/>
                            </>
                        )
                        :(
                           <>
                                <span>Up {pageViews.badgeTitle}% this month</span>
                                <TrendingUp className="size-4"/>
                            </>
                        )
                    }
                </div>
                <div className="text-muted-foreground">
                   sfasdfsd
                </div>
            </CardFooter>
        </Card>
        {/* Card for registered */}
        <Card className="@container/card">
            <CardHeader>
                <CardDescription className="capitalize">{registered.description}</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    {registered.title}
                </CardTitle>
                <CardAction>
                    <Badge variant="outline" className={`${registered.trending === 'negative' ? 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300' : 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300' }`}>
                        {
                            registered.trending === 'negative' ? 
                            (
                                <><TrendingDown/> -</>
                            )
                            :
                            (
                                <><TrendingUp/> +</>
                            )
                        }
                        {registered.badgeTitle}%
                    </Badge>
                </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                    {
                        registered.trending === 'negative' ? 
                        (   
                            <>
                                <span>Down {registered.badgeTitle}% this month</span>
                                <TrendingDown className="size-4"/>
                            </>
                        )
                        :(
                           <>
                                <span>Up {registered.badgeTitle}% this month</span>
                                <TrendingUp className="size-4"/>
                            </>
                        )
                    }
                </div>
                <div className="text-muted-foreground">
                   Strong user retention
                </div>
            </CardFooter>
        </Card>
        {/* Card for subscribers */}
        <Card className="@container/card">
            <CardHeader>
                <CardDescription className="capitalize">{subscribers.description}</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    {subscribers.title}
                </CardTitle>
                <CardAction>
                    <Badge variant="outline" className={`${subscribers.trending === 'negative' ? 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300' : 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300' }`}>
                        {
                            subscribers.trending === 'negative' ? 
                            (
                                <><TrendingDown/> -</>
                            )
                            :
                            (
                                <><TrendingUp/> +</>
                            )
                        }
                        {subscribers.badgeTitle}%
                    </Badge>
                </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                    {
                        subscribers.trending === 'negative' ? 
                        (   
                            <>
                                <span>Down {subscribers.badgeTitle}% this month</span>
                                <TrendingDown className="size-4"/>
                            </>
                        )
                        :(
                           <>
                                <span>Up {subscribers.badgeTitle}% this month</span>
                                <TrendingUp className="size-4"/>
                            </>
                        )
                    }
                </div>
                <div className="text-muted-foreground">
                   Strong user retention
                </div>
            </CardFooter>
        </Card>
    </div>
  )
}
