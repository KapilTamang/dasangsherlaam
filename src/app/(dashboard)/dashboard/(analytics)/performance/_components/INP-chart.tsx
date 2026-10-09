"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { date: "2026-09-01", performance: 200},
  { date: "2026-09-02", performance: 140},
  { date: "2026-09-03", performance: 180},
  { date: "2026-09-04", performance: 100},
  { date: "2026-09-05", performance: 200},
  { date: "2026-09-06", performance: 280},
  { date: "2026-09-07", performance: 220}
]

const chartConfig = {
  performance: {
    color: "var(--chart-2)"
  }
 
} satisfies ChartConfig

export function INPChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>INP Performance Trend</CardTitle>
        <CardDescription>Page response time on user interaction</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-square w-full max-h-50">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 24,
              left: 20,
              right: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tick={{fill: 'var(--color-foreground)'}}
              axisLine={false}
              tickMargin={8}
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
              content={<ChartTooltipContent
              labelFormatter={(value) => {
                    return new Date(String(value)).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                indicator="line" />}
            />
            <Line
              dataKey="performance"
              type="linear"
              stroke="var(--color-performance)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-performance)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground capitalize"
                fontSize={12}
                formatter={(value) => `${value?.toLocaleString()}ms`}
              />
            </Line> 
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium">
          INP performance this week<TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground">
         (Remarks here***) 
        </div>
      </CardFooter>
    </Card>
  )
}
