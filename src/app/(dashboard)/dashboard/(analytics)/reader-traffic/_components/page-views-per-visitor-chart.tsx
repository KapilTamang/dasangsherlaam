"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
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
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "An interactive line chart"

const chartData = [
   { date: "2024-04-01", pageViews: 5 },
  { date: "2024-04-02", pageViews: 4 },
  { date: "2024-04-03", pageViews: 1 },
  { date: "2024-04-04", pageViews: 2 },
  { date: "2024-04-05", pageViews: 3 },
  { date: "2024-04-06", pageViews: 2 },
  { date: "2024-04-07", pageViews: 2 },
  { date: "2024-04-08", pageViews: 3 },
  { date: "2024-04-09", pageViews: 1 },
  { date: "2024-04-10", pageViews: 5 },
  { date: "2024-04-11", pageViews: 7 },
  { date: "2024-04-12", pageViews: 4 },
  { date: "2024-04-13", pageViews: 3 },
  { date: "2024-04-14", pageViews: 2 },
  { date: "2024-04-15", pageViews: 5 },
  { date: "2024-04-16", pageViews: 5 },
  { date: "2024-04-17", pageViews: 7 },
  { date: "2024-04-18", pageViews: 5 },
  { date: "2024-04-19", pageViews: 1 },
  { date: "2024-04-20", pageViews: 2 },
  { date: "2024-04-21", pageViews: 3 },
  { date: "2024-04-22", pageViews: 1 },
  { date: "2024-04-23", pageViews: 4 },
  { date: "2024-04-24", pageViews: 4 },
  { date: "2024-04-25", pageViews: 5 },
  { date: "2024-04-26", pageViews: 3 },
  { date: "2024-04-27", pageViews: 1 },
  { date: "2024-04-28", pageViews: 1 },
  { date: "2024-04-29", pageViews: 2 },
  { date: "2024-04-30", pageViews: 3 },
  { date: "2024-05-01", pageViews: 2 },
  { date: "2024-05-02", pageViews: 3 },
  { date: "2024-05-03", pageViews: 1 },
  { date: "2024-05-04", pageViews: 4 },
  { date: "2024-05-05", pageViews: 3 },
  { date: "2024-05-06", pageViews: 5 },
  { date: "2024-05-07", pageViews: 3 },
  { date: "2024-05-08", pageViews: 2 },
  { date: "2024-05-09", pageViews: 1 },
  { date: "2024-05-10", pageViews: 3 },
  { date: "2024-05-11", pageViews: 2 },
  { date: "2024-05-12", pageViews: 2 },
  { date: "2024-05-13", pageViews: 1 },
  { date: "2024-05-14", pageViews: 4 },
  { date: "2024-05-15", pageViews: 3 },
  { date: "2024-05-16", pageViews: 4 },
  { date: "2024-05-17", pageViews: 4 },
  { date: "2024-05-18", pageViews: 3 },
  { date: "2024-05-19", pageViews: 1 },
  { date: "2024-05-20", pageViews: 2 },
  { date: "2024-05-21", pageViews: 1 },
  { date: "2024-05-22", pageViews: 1 },
  { date: "2024-05-23", pageViews: 2 },
  { date: "2024-05-24", pageViews: 2 },
  { date: "2024-05-25", pageViews: 2 },
  { date: "2024-05-26", pageViews: 1 },
  { date: "2024-05-27", pageViews: 4 },
  { date: "2024-05-28", pageViews: 1 },
  { date: "2024-05-29", pageViews: 1 },
  { date: "2024-05-30", pageViews: 2 },
  { date: "2024-05-31", pageViews: 2 },
  { date: "2024-06-01", pageViews: 7 },
  { date: "2024-06-02", pageViews: 4 },
  { date: "2024-06-03", pageViews: 1 },
  { date: "2024-06-04", pageViews: 3 },
  { date: "2024-06-05", pageViews: 1 },
  { date: "2024-06-06", pageViews: 2 },
  { date: "2024-06-07", pageViews: 3 },
  { date: "2024-06-08", pageViews: 3 },
  { date: "2024-06-09", pageViews: 4 },
  { date: "2024-06-10", pageViews: 2 },
  { date: "2024-06-11", pageViews: 1 },
  { date: "2024-06-12", pageViews: 4 },
  { date: "2024-06-13", pageViews: 1 },
  { date: "2024-06-14", pageViews: 3 },
  { date: "2024-06-15", pageViews: 3 },
  { date: "2024-06-16", pageViews: 2 },
  { date: "2024-06-17", pageViews: 5 },
  { date: "2024-06-18", pageViews: 1 },
  { date: "2024-06-19", pageViews: 2 },
  { date: "2024-06-20", pageViews: 4 },
  { date: "2024-06-21", pageViews: 2 },
  { date: "2024-06-22", pageViews: 2 },
  { date: "2024-06-23", pageViews: 5 },
  { date: "2024-06-24", pageViews: 1 },
  { date: "2024-06-25", pageViews: 1 },
  { date: "2024-06-26", pageViews: 3 },
  { date: "2024-06-27", pageViews: 4 },
  { date: "2024-06-28", pageViews: 2 },
  { date: "2024-06-29", pageViews: 1 },
  { date: "2024-06-30", pageViews: 4 },
]

const chartConfig = {
  pageViews: {
    label: "PageViews/Visitor",
    color: "var(--chart-1)",
  },

} satisfies ChartConfig

export function PageViewsPerVisitorChart() {
const isMobile = useIsMobile();
const [timeRange, setTimeRange] = React.useState("30");

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
          <CardTitle>Page Views per visitor</CardTitle>
          <CardDescription>
            Showing average page views per visitor for the last {timeRange === '7' ? 'week' : timeRange === '30' ? 'month' : timeRange === '90' ? 'quarter' : 'year'} 
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
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-62.5 w-full"
        >
          <LineChart
            accessibilityLayer
            data={filteredData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
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
              content={
                <ChartTooltipContent
                  className="w-37.5"
                  nameKey="pageViews"
                  labelFormatter={(value) => {
                    return new Date(String(value)).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Line
              dataKey="pageViews"
              type="natural"
              stroke="var(--color-pageViews)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
