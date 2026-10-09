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
  { date: "2026-09-01", performance: 2.5},
  { date: "2026-09-02", performance: 2.7},
  { date: "2026-09-03", performance: 1.5},
  { date: "2026-09-04", performance: 1.8},
  { date: "2026-09-05", performance: 2.9},
  { date: "2026-09-06", performance: 2.1},
  { date: "2026-09-07", performance: 3.6}
]

const chartConfig = {
  performance: {
    color: "var(--chart-1)"
  }
 
} satisfies ChartConfig

export function LCPChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>LCP Performance Trend</CardTitle>
        <CardDescription>Sept 01 - Sept 07 2026</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-square w-full max-h-50">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 20,
              right: 12,
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
                formatter={(value) => `${value?.toLocaleString()}s`}
              />
            </Line> 
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium">
          LCU performance this week<TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground">
         (Comparison here***) for the
        </div>
      </CardFooter>
    </Card>
  )
}
