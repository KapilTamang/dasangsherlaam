"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"

import { formatNumber } from "@/lib/utils"

const chartData = [
  { date: "2024-06-01", totalVisitors: 450, uniqueVisitors: 200 },
  { date: "2024-06-02", totalVisitors: 785, uniqueVisitors: 410 },
  { date: "2024-06-03", totalVisitors: 439, uniqueVisitors: 160 },
  { date: "2024-06-04", totalVisitors: 633, uniqueVisitors: 380 },
  { date: "2024-06-05", totalVisitors: 345, uniqueVisitors: 140 },
  { date: "2024-06-06", totalVisitors: 432, uniqueVisitors: 250 },
  { date: "2024-06-07", totalVisitors: 550, uniqueVisitors: 370 },
  { date: "2024-06-08", totalVisitors: 643, uniqueVisitors: 320 },
  { date: "2024-06-09", totalVisitors: 743, uniqueVisitors: 480 },
  { date: "2024-06-10", totalVisitors: 460, uniqueVisitors: 200 },
  { date: "2024-06-11", totalVisitors: 348, uniqueVisitors: 150 },
  { date: "2024-06-12", totalVisitors: 845, uniqueVisitors: 420 },
  { date: "2024-06-13", totalVisitors: 435, uniqueVisitors: 130 },
  { date: "2024-06-14", totalVisitors: 660, uniqueVisitors: 380 },
  { date: "2024-06-15", totalVisitors: 540, uniqueVisitors: 350 },
  { date: "2024-06-16", totalVisitors: 690, uniqueVisitors: 310 },
  { date: "2024-06-17", totalVisitors: 983, uniqueVisitors: 520 },
  { date: "2024-06-18", totalVisitors: 530, uniqueVisitors: 170 },
  { date: "2024-06-19", totalVisitors: 484, uniqueVisitors: 290 },
  { date: "2024-06-20", totalVisitors: 990, uniqueVisitors: 450 },
  { date: "2024-06-21", totalVisitors: 765, uniqueVisitors: 210 },
  { date: "2024-06-22", totalVisitors: 550, uniqueVisitors: 270 },
  { date: "2024-06-23", totalVisitors: 874, uniqueVisitors: 530 },
  { date: "2024-06-24", totalVisitors: 540, uniqueVisitors: 180 },
  { date: "2024-06-25", totalVisitors: 386, uniqueVisitors: 190 },
  { date: "2024-06-26", totalVisitors: 660, uniqueVisitors: 380 },
  { date: "2024-06-27", totalVisitors: 720, uniqueVisitors: 490 },
  { date: "2024-06-28", totalVisitors: 642, uniqueVisitors: 200 },
  { date: "2024-06-29", totalVisitors: 390, uniqueVisitors: 160 },
  { date: "2024-06-30", totalVisitors: 990, uniqueVisitors: 400 },
]

const chartConfig = {
  totalVisitors: {
    label: "Total Audience",
    color: "var(--chart-1)",
  },
  uniqueVisitors: {
    label: "Unique Audience",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function AudienceOverviewChart() {
const isMobile = useIsMobile();
const [timeRange, setTimeRange] = React.useState("30")


  //Only weekly chart for mobile devices
    React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    const daysToSubtract = Number(timeRange);

	const startDate = new Date(referenceDate)
	startDate.setDate(startDate.getDate() - daysToSubtract)
	return date >= startDate
  });

  return (
    <Card className="pt-0">
        <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
            <div className="grid flex-1 gap-1">
                <CardTitle>Audience Overview</CardTitle>
                <CardDescription>
                    Showing total visitors vs unique visitors for the last {timeRange === '7' ? 'week' : timeRange === '30' ? 'month' : timeRange === '90' ? 'quarter' : 'year'} 
                </CardDescription>
            </div>
            <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger
                    className="hidden w-40 rounded-lg sm:ml-auto sm:flex"
                    aria-label="Select a value"
                >
                    <SelectValue/>
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                    <SelectItem value="7" className="rounded-lg">
                    Last 7 days
                    </SelectItem>
                    <SelectItem value="30" className="rounded-lg">
                    Last 30 days
                    </SelectItem>
                </SelectContent>
            </Select>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
            <ChartContainer
            config={chartConfig}
            className="aspect-auto h-62.5 w-full"
            >
                <AreaChart data={filteredData}>
                    <defs>
                    <linearGradient id="fillTotalVisitors" x1="0" y1="0" x2="0" y2="1">
                        <stop
                        offset="5%"
                        stopColor="var(--color-totalVisitors)"
                        stopOpacity={0.8}
                        />
                        <stop
                        offset="95%"
                        stopColor="var(--color-totalVisitors)"
                        stopOpacity={0.1}
                        />
                    </linearGradient>
                    <linearGradient id="fillUniqueVisitors" x1="0" y1="0" x2="0" y2="1">
                        <stop
                        offset="5%"
                        stopColor="var(--color-uniqueVisitors)"
                        stopOpacity={0.8}
                        />
                        <stop
                        offset="95%"
                        stopColor="var(--color-uniqueVisitors)"
                        stopOpacity={0.1}
                        />
                    </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} />
                    <XAxis
                    dataKey="date"
                    tick={{fill: 'var(--color-foreground)'}}
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    minTickGap={32}
                    tickFormatter={(value) => {
                        const date = new Date(value)
                        return date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        })
                    }}
                    />
                    <ChartTooltip
                    cursor={false}
                    content={
                        <ChartTooltipContent
                        labelFormatter={(value) => {
                            return new Date(String(value)).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            })
                        }}
                        valueFormatter={(value) => formatNumber(Number(value))}
                        indicator="dot"
                        />
                    }
                    />
                    <Area
                    dataKey="totalVisitors"
                    type="natural"
                    fill="url(#fillTotalVisitors)"
                    stroke="var(--color-totalVisitors)"
                    stackId="a"
                    />
                    <Area
                    dataKey="uniqueVisitors"
                    type="natural"
                    fill="url(#fillUniqueVisitors)"
                    stroke="var(--color-uniqueVisitors)"
                    stackId="a"
                    />
                    <ChartLegend content={<ChartLegendContent />} />
                </AreaChart>
            </ChartContainer>
        </CardContent>
    </Card>
  )
}
