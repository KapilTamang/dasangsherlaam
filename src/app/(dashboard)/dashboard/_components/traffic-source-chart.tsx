"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart} from "recharts"

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
  {source: "social", visitors: 287, fill: "var(--color-social)" },
  {source: "direct", visitors: 200, fill: "var(--color-direct)" },
  {source: "organic", visitors: 275, fill: "var(--color-organic)" },
  {source: "ads", visitors: 433, fill: "var(--color-ads)" },
  {source: "referral", visitors: 173, fill: "var(--color-referral)" },
  {source: "email", visitors: 500, fill: "var(--color-email)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  organic: {
    label: "Organic",
    color: "var(--chart-1)",
  },
  direct: {
    label: "Direct",
    color: "var(--chart-2)",
  },
  social: {
    label: "Social",
    color: "var(--chart-3)",
  },
  referral: {
    label: "Referral",
    color: "var(--chart-4)",
  },
  ads: {
    label: "Paid Ads",
    color: "var(--chart-5)",
  },
  email: {
    label: "Email Campaign",
    color: "var(--chart-6)",
  },
} satisfies ChartConfig

export function TrafficSourceChart({selectedPeriod} : SelectedPeriodProps) {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Traffic Sources</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-55 w-full"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel/>}
            />
            <Pie
            data={chartData}
            dataKey="visitors"
            nameKey="source"
            labelLine={true}
            label={({ payload, ...props }) => {
                return (
                <text
                    className="capitalize"
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="var(--foreground)"
                >
                    {payload.source}
                </text>
                )
            }}
            innerRadius={55}
            strokeWidth={1}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium">
          {/* comparision section */}
          Email Campaign with the highest 5.2% contribution for traffic this {selectedPeriod.duration} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
         (Comparision here***) {selectedPeriod.title}
        </div>
      </CardFooter>
    </Card>
  )
}
