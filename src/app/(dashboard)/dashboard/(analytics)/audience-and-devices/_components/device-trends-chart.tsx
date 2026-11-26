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
  { date: "2024-06-01", desktop: 450, mobile: 200, tablet: 120},
  { date: "2024-06-02", desktop: 785, mobile: 410, tablet: 90},
  { date: "2024-06-03", desktop: 439, mobile: 160, tablet: 180},
  { date: "2024-06-04", desktop: 633, mobile: 380, tablet: 140},
  { date: "2024-06-05", desktop: 345, mobile: 140, tablet: 220},
  { date: "2024-06-06", desktop: 432, mobile: 250, tablet: 220},
  { date: "2024-06-07", desktop: 550, mobile: 370, tablet: 85},
  { date: "2024-06-08", desktop: 643, mobile: 320, tablet: 100},
  { date: "2024-06-09", desktop: 743, mobile: 480, tablet: 67},
  { date: "2024-06-10", desktop: 460, mobile: 200, tablet: 250},
  { date: "2024-06-11", desktop: 348, mobile: 150, tablet: 110},
  { date: "2024-06-12", desktop: 845, mobile: 420, tablet: 115},
  { date: "2024-06-13", desktop: 435, mobile: 130, tablet: 205},
  { date: "2024-06-14", desktop: 660, mobile: 380, tablet: 195},
  { date: "2024-06-15", desktop: 540, mobile: 350, tablet: 230},
  { date: "2024-06-16", desktop: 690, mobile: 310, tablet: 136},
  { date: "2024-06-17", desktop: 983, mobile: 520, tablet: 120},
  { date: "2024-06-18", desktop: 530, mobile: 170, tablet: 99},
  { date: "2024-06-19", desktop: 484, mobile: 290, tablet: 145},
  { date: "2024-06-20", desktop: 990, mobile: 450, tablet: 198},
  { date: "2024-06-21", desktop: 765, mobile: 210, tablet: 220},
  { date: "2024-06-22", desktop: 550, mobile: 270, tablet: 132},
  { date: "2024-06-23", desktop: 874, mobile: 530, tablet: 120},
  { date: "2024-06-24", desktop: 540, mobile: 180, tablet: 75},
  { date: "2024-06-25", desktop: 386, mobile: 190, tablet: 105},
  { date: "2024-06-26", desktop: 660, mobile: 380, tablet: 100},
  { date: "2024-06-27", desktop: 720, mobile: 490, tablet: 185},
  { date: "2024-06-28", desktop: 642, mobile: 200, tablet: 120},
  { date: "2024-06-29", desktop: 390, mobile: 160, tablet: 200},
  { date: "2024-06-30", desktop: 990, mobile: 400, tablet: 240},
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
  tablet: {
    label: "Tablet",
    color: "var(--chart-3)"
  }
} satisfies ChartConfig

export function DeviceTrendsChart() {
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
                <CardTitle>Device Trends</CardTitle>
                <CardDescription>
                    Showing how users access, navigate, and convert across different screen sizes. for the last {timeRange === '7' ? 'week' : timeRange === '30' ? 'month' : timeRange === '90' ? 'quarter' : 'year'} 
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
                    <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                        <stop
                        offset="5%"
                        stopColor="var(--color-desktop)"
                        stopOpacity={0.8}
                        />
                        <stop
                        offset="95%"
                        stopColor="var(--color-desktop)"
                        stopOpacity={0.1}
                        />
                    </linearGradient>
                    <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                        <stop
                        offset="5%"
                        stopColor="var(--color-mobile)"
                        stopOpacity={0.8}
                        />
                        <stop
                        offset="95%"
                        stopColor="var(--color-mobile)"
                        stopOpacity={0.1}
                        />
                    </linearGradient>
                    <linearGradient id="fillTablet" x1="0" y1="0" x2="0" y2="1">
                        <stop
                        offset="5%"
                        stopColor="var(--color-tablet)"
                        stopOpacity={0.8}
                        />
                        <stop
                        offset="95%"
                        stopColor="var(--color-tablet)"
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
                    dataKey="desktop"
                    type="natural"
                    fill="url(#fillDesktop)"
                    stroke="var(--color-desktop)"
                    stackId="a"
                    />
                    <Area
                    dataKey="mobile"
                    type="natural"
                    fill="url(#fillMobile)"
                    stroke="var(--color-mobile)"
                    stackId="a"
                    />
                    <Area
                    dataKey="tablet"
                    type="natural"
                    fill="url(#fillTablet)"
                    stroke="var(--color-tablet)"
                    stackId="a"
                    />
                    <ChartLegend content={<ChartLegendContent />} />
                </AreaChart>
            </ChartContainer>
        </CardContent>
    </Card>
  )
}
