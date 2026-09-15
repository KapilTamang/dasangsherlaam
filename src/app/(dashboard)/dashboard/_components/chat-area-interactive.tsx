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
  { date: "2024-04-01", registered: 222, subscribed: 150 },
  { date: "2024-04-02", registered: 97, subscribed: 180 },
  { date: "2024-04-03", registered: 167, subscribed: 120 },
  { date: "2024-04-04", registered: 242, subscribed: 260 },
  { date: "2024-04-05", registered: 373, subscribed: 290 },
  { date: "2024-04-06", registered: 301, subscribed: 340 },
  { date: "2024-04-07", registered: 245, subscribed: 180 },
  { date: "2024-04-08", registered: 409, subscribed: 320 },
  { date: "2024-04-09", registered: 59, subscribed: 110 },
  { date: "2024-04-10", registered: 261, subscribed: 190 },
  { date: "2024-04-11", registered: 327, subscribed: 350 },
  { date: "2024-04-12", registered: 292, subscribed: 210 },
  { date: "2024-04-13", registered: 342, subscribed: 380 },
  { date: "2024-04-14", registered: 137, subscribed: 220 },
  { date: "2024-04-15", registered: 120, subscribed: 170 },
  { date: "2024-04-16", registered: 138, subscribed: 190 },
  { date: "2024-04-17", registered: 446, subscribed: 360 },
  { date: "2024-04-18", registered: 364, subscribed: 410 },
  { date: "2024-04-19", registered: 243, subscribed: 180 },
  { date: "2024-04-20", registered: 89, subscribed: 150 },
  { date: "2024-04-21", registered: 137, subscribed: 200 },
  { date: "2024-04-22", registered: 224, subscribed: 170 },
  { date: "2024-04-23", registered: 138, subscribed: 230 },
  { date: "2024-04-24", registered: 387, subscribed: 290 },
  { date: "2024-04-25", registered: 215, subscribed: 250 },
  { date: "2024-04-26", registered: 75, subscribed: 130 },
  { date: "2024-04-27", registered: 383, subscribed: 420 },
  { date: "2024-04-28", registered: 122, subscribed: 180 },
  { date: "2024-04-29", registered: 315, subscribed: 240 },
  { date: "2024-04-30", registered: 454, subscribed: 380 },
  { date: "2024-05-01", registered: 165, subscribed: 220 },
  { date: "2024-05-02", registered: 293, subscribed: 310 },
  { date: "2024-05-03", registered: 247, subscribed: 190 },
  { date: "2024-05-04", registered: 385, subscribed: 420 },
  { date: "2024-05-05", registered: 481, subscribed: 390 },
  { date: "2024-05-06", registered: 498, subscribed: 520 },
  { date: "2024-05-07", registered: 388, subscribed: 300 },
  { date: "2024-05-08", registered: 149, subscribed: 210 },
  { date: "2024-05-09", registered: 227, subscribed: 180 },
  { date: "2024-05-10", registered: 293, subscribed: 330 },
  { date: "2024-05-11", registered: 335, subscribed: 270 },
  { date: "2024-05-12", registered: 197, subscribed: 240 },
  { date: "2024-05-13", registered: 197, subscribed: 160 },
  { date: "2024-05-14", registered: 448, subscribed: 490 },
  { date: "2024-05-15", registered: 473, subscribed: 380 },
  { date: "2024-05-16", registered: 338, subscribed: 400 },
  { date: "2024-05-17", registered: 499, subscribed: 420 },
  { date: "2024-05-18", registered: 315, subscribed: 350 },
  { date: "2024-05-19", registered: 235, subscribed: 180 },
  { date: "2024-05-20", registered: 177, subscribed: 230 },
  { date: "2024-05-21", registered: 82, subscribed: 140 },
  { date: "2024-05-22", registered: 81, subscribed: 120 },
  { date: "2024-05-23", registered: 252, subscribed: 290 },
  { date: "2024-05-24", registered: 294, subscribed: 220 },
  { date: "2024-05-25", registered: 201, subscribed: 250 },
  { date: "2024-05-26", registered: 213, subscribed: 170 },
  { date: "2024-05-27", registered: 420, subscribed: 460 },
  { date: "2024-05-28", registered: 233, subscribed: 190 },
  { date: "2024-05-29", registered: 78, subscribed: 130 },
  { date: "2024-05-30", registered: 340, subscribed: 280 },
  { date: "2024-05-31", registered: 178, subscribed: 230 },
  { date: "2024-06-01", registered: 178, subscribed: 200 },
  { date: "2024-06-02", registered: 470, subscribed: 410 },
  { date: "2024-06-03", registered: 103, subscribed: 160 },
  { date: "2024-06-04", registered: 439, subscribed: 380 },
  { date: "2024-06-05", registered: 88, subscribed: 140 },
  { date: "2024-06-06", registered: 294, subscribed: 250 },
  { date: "2024-06-07", registered: 323, subscribed: 370 },
  { date: "2024-06-08", registered: 385, subscribed: 320 },
  { date: "2024-06-09", registered: 438, subscribed: 480 },
  { date: "2024-06-10", registered: 155, subscribed: 200 },
  { date: "2024-06-11", registered: 92, subscribed: 150 },
  { date: "2024-06-12", registered: 492, subscribed: 420 },
  { date: "2024-06-13", registered: 81, subscribed: 130 },
  { date: "2024-06-14", registered: 426, subscribed: 380 },
  { date: "2024-06-15", registered: 307, subscribed: 350 },
  { date: "2024-06-16", registered: 371, subscribed: 310 },
  { date: "2024-06-17", registered: 475, subscribed: 520 },
  { date: "2024-06-18", registered: 107, subscribed: 170 },
  { date: "2024-06-19", registered: 341, subscribed: 290 },
  { date: "2024-06-20", registered: 408, subscribed: 450 },
  { date: "2024-06-21", registered: 169, subscribed: 210 },
  { date: "2024-06-22", registered: 317, subscribed: 270 },
  { date: "2024-06-23", registered: 480, subscribed: 530 },
  { date: "2024-06-24", registered: 132, subscribed: 180 },
  { date: "2024-06-25", registered: 141, subscribed: 190 },
  { date: "2024-06-26", registered: 434, subscribed: 380 },
  { date: "2024-06-27", registered: 448, subscribed: 490 },
  { date: "2024-06-28", registered: 149, subscribed: 200 },
  { date: "2024-06-29", registered: 103, subscribed: 160 },
  { date: "2024-06-30", registered: 446, subscribed: 400 },
]

const chartConfig = {
  registered: {
    label: "Registered",
    color: "var(--chart-1)",
  },
  subscribed: {
    label: "Subscribed",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
const isMobile = useIsMobile();
const [timeRange, setTimeRange] = React.useState("7d")
const [chartDuration,setChartDuration] = React.useState("week")


  //Only weekly chart for mobile devices
    React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
	  setChartDuration("week")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 7
	setChartDuration("week")

    if (timeRange === "365d") {
      	daysToSubtract = 365
		setChartDuration("year")
    } 
	else if (timeRange === "90d") {
		daysToSubtract = 90
		setChartDuration("quarter")
    }	
	else if (timeRange === "30d") {
		daysToSubtract = 30
		setChartDuration("month")
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  });

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Traffic And Audience Trend</CardTitle>
          <CardDescription>
            Showing visitor's acquisition for the last {chartDuration}
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-40 rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
			  <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
			 <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
			 <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="365d" className="rounded-lg">
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
              <linearGradient id="fillRegistered" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-registered)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-registered)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillSubscribed" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-subscribed)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-subscribed)"
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
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="registered"
              type="natural"
              fill="url(#fillRegistered)"
              stroke="var(--color-registered)"
              stackId="a"
            />
            <Area
              dataKey="subscribed"
              type="natural"
              fill="url(#fillSubscribed)"
              stroke="var(--color-subscribed)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
