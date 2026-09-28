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

interface SelectedPeriodProps {
  selectedPeriod: {
    id: string,
    title: string,
    value: string,
    duration: string
  }
}

const chartData = [
  { source: "organic", session: 186},
  { source: "direct", session: 305},
  { source: "social", session: 237},
  { source: "ads", session: 73},
  { source: "referral", session: 209},
  { source: "email", session: 214},
]

const chartConfig = {
  session: {
    color: "var(--chart-1)"
  }
 
} satisfies ChartConfig

export function UserEngagement({selectedPeriod}: SelectedPeriodProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Enagement vs Different Traffic Sources</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-square w-full max-h-50">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="source"
              tickLine={false}
              tick={{fill: 'var(--color-foreground)'}}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="session"
              type="natural"
              stroke="var(--color-session)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-session)",
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
              />
            </Line> 
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium">
         Direct vistors with highest engagement of 5.2% this {selectedPeriod.duration} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground">
         (Comparison here***) for the {selectedPeriod.title}
        </div>
      </CardFooter>
    </Card>
  )
}
