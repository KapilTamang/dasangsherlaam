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

const chartData = [
  { date: "2024-04-01", pageViews: 222, uniqueVisitors: 150 },
  { date: "2024-04-02", pageViews: 97, uniqueVisitors: 180 },
  { date: "2024-04-03", pageViews: 167, uniqueVisitors: 120 },
  { date: "2024-04-04", pageViews: 242, uniqueVisitors: 260 },
  { date: "2024-04-05", pageViews: 373, uniqueVisitors: 290 },
  { date: "2024-04-06", pageViews: 301, uniqueVisitors: 340 },
  { date: "2024-04-07", pageViews: 245, uniqueVisitors: 180 },
  { date: "2024-04-08", pageViews: 409, uniqueVisitors: 320 },
  { date: "2024-04-09", pageViews: 59, uniqueVisitors: 110 },
  { date: "2024-04-10", pageViews: 261, uniqueVisitors: 190 },
  { date: "2024-04-11", pageViews: 327, uniqueVisitors: 350 },
  { date: "2024-04-12", pageViews: 292, uniqueVisitors: 210 },
  { date: "2024-04-13", pageViews: 342, uniqueVisitors: 380 },
  { date: "2024-04-14", pageViews: 137, uniqueVisitors: 220 },
  { date: "2024-04-15", pageViews: 120, uniqueVisitors: 170 },
  { date: "2024-04-16", pageViews: 138, uniqueVisitors: 190 },
  { date: "2024-04-17", pageViews: 446, uniqueVisitors: 360 },
  { date: "2024-04-18", pageViews: 364, uniqueVisitors: 410 },
  { date: "2024-04-19", pageViews: 243, uniqueVisitors: 180 },
  { date: "2024-04-20", pageViews: 89, uniqueVisitors: 150 },
  { date: "2024-04-21", pageViews: 137, uniqueVisitors: 200 },
  { date: "2024-04-22", pageViews: 224, uniqueVisitors: 170 },
  { date: "2024-04-23", pageViews: 138, uniqueVisitors: 230 },
  { date: "2024-04-24", pageViews: 387, uniqueVisitors: 290 },
  { date: "2024-04-25", pageViews: 215, uniqueVisitors: 250 },
  { date: "2024-04-26", pageViews: 75, uniqueVisitors: 130 },
  { date: "2024-04-27", pageViews: 383, uniqueVisitors: 420 },
  { date: "2024-04-28", pageViews: 122, uniqueVisitors: 180 },
  { date: "2024-04-29", pageViews: 315, uniqueVisitors: 240 },
  { date: "2024-04-30", pageViews: 454, uniqueVisitors: 380 },
  { date: "2024-05-01", pageViews: 165, uniqueVisitors: 220 },
  { date: "2024-05-02", pageViews: 293, uniqueVisitors: 310 },
  { date: "2024-05-03", pageViews: 247, uniqueVisitors: 190 },
  { date: "2024-05-04", pageViews: 385, uniqueVisitors: 420 },
  { date: "2024-05-05", pageViews: 481, uniqueVisitors: 390 },
  { date: "2024-05-06", pageViews: 498, uniqueVisitors: 520 },
  { date: "2024-05-07", pageViews: 388, uniqueVisitors: 300 },
  { date: "2024-05-08", pageViews: 149, uniqueVisitors: 210 },
  { date: "2024-05-09", pageViews: 227, uniqueVisitors: 180 },
  { date: "2024-05-10", pageViews: 293, uniqueVisitors: 330 },
  { date: "2024-05-11", pageViews: 335, uniqueVisitors: 270 },
  { date: "2024-05-12", pageViews: 197, uniqueVisitors: 240 },
  { date: "2024-05-13", pageViews: 197, uniqueVisitors: 160 },
  { date: "2024-05-14", pageViews: 448, uniqueVisitors: 490 },
  { date: "2024-05-15", pageViews: 473, uniqueVisitors: 380 },
  { date: "2024-05-16", pageViews: 338, uniqueVisitors: 400 },
  { date: "2024-05-17", pageViews: 499, uniqueVisitors: 420 },
  { date: "2024-05-18", pageViews: 315, uniqueVisitors: 350 },
  { date: "2024-05-19", pageViews: 235, uniqueVisitors: 180 },
  { date: "2024-05-20", pageViews: 177, uniqueVisitors: 230 },
  { date: "2024-05-21", pageViews: 82, uniqueVisitors: 140 },
  { date: "2024-05-22", pageViews: 81, uniqueVisitors: 120 },
  { date: "2024-05-23", pageViews: 252, uniqueVisitors: 290 },
  { date: "2024-05-24", pageViews: 294, uniqueVisitors: 220 },
  { date: "2024-05-25", pageViews: 201, uniqueVisitors: 250 },
  { date: "2024-05-26", pageViews: 213, uniqueVisitors: 170 },
  { date: "2024-05-27", pageViews: 420, uniqueVisitors: 460 },
  { date: "2024-05-28", pageViews: 233, uniqueVisitors: 190 },
  { date: "2024-05-29", pageViews: 78, uniqueVisitors: 130 },
  { date: "2024-05-30", pageViews: 340, uniqueVisitors: 280 },
  { date: "2024-05-31", pageViews: 178, uniqueVisitors: 230 },
  { date: "2024-06-01", pageViews: 178, uniqueVisitors: 200 },
  { date: "2024-06-02", pageViews: 470, uniqueVisitors: 410 },
  { date: "2024-06-03", pageViews: 103, uniqueVisitors: 160 },
  { date: "2024-06-04", pageViews: 439, uniqueVisitors: 380 },
  { date: "2024-06-05", pageViews: 88, uniqueVisitors: 140 },
  { date: "2024-06-06", pageViews: 294, uniqueVisitors: 250 },
  { date: "2024-06-07", pageViews: 323, uniqueVisitors: 370 },
  { date: "2024-06-08", pageViews: 385, uniqueVisitors: 320 },
  { date: "2024-06-09", pageViews: 438, uniqueVisitors: 480 },
  { date: "2024-06-10", pageViews: 155, uniqueVisitors: 200 },
  { date: "2024-06-11", pageViews: 92, uniqueVisitors: 150 },
  { date: "2024-06-12", pageViews: 492, uniqueVisitors: 420 },
  { date: "2024-06-13", pageViews: 81, uniqueVisitors: 130 },
  { date: "2024-06-14", pageViews: 426, uniqueVisitors: 380 },
  { date: "2024-06-15", pageViews: 307, uniqueVisitors: 350 },
  { date: "2024-06-16", pageViews: 371, uniqueVisitors: 310 },
  { date: "2024-06-17", pageViews: 475, uniqueVisitors: 520 },
  { date: "2024-06-18", pageViews: 107, uniqueVisitors: 170 },
  { date: "2024-06-19", pageViews: 341, uniqueVisitors: 290 },
  { date: "2024-06-20", pageViews: 408, uniqueVisitors: 450 },
  { date: "2024-06-21", pageViews: 169, uniqueVisitors: 210 },
  { date: "2024-06-22", pageViews: 317, uniqueVisitors: 270 },
  { date: "2024-06-23", pageViews: 480, uniqueVisitors: 530 },
  { date: "2024-06-24", pageViews: 132, uniqueVisitors: 180 },
  { date: "2024-06-25", pageViews: 141, uniqueVisitors: 190 },
  { date: "2024-06-26", pageViews: 434, uniqueVisitors: 380 },
  { date: "2024-06-27", pageViews: 448, uniqueVisitors: 490 },
  { date: "2024-06-28", pageViews: 149, uniqueVisitors: 200 },
  { date: "2024-06-29", pageViews: 103, uniqueVisitors: 160 },
  { date: "2024-06-30", pageViews: 446, uniqueVisitors: 400 },
]

const chartConfig = {
  pageViews: {
    label: "Page Views",
    color: "var(--chart-1)",
  },
  uniqueVisitors: {
    label: "Unique Visitors",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function PageViewsUniqueVisitorsChart() {
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
          <CardTitle>Page Views and Unique Visitors Trend</CardTitle>
          <CardDescription>
            Showing page views vs unique visitors for the last {timeRange === '7' ? 'week' : timeRange === '30' ? 'month' : timeRange === '90' ? 'quarter' : 'year'} 
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
			 <SelectItem value="90" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="365" className="rounded-lg">
              Last 12 months
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
              <linearGradient id="fillPageViews" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-pageViews)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-pageViews)"
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
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="pageViews"
              type="natural"
              fill="url(#fillPageViews)"
              stroke="var(--color-pageViews)"
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
