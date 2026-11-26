"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, LabelList, Pie, PieChart} from "recharts"

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

import { formatNumber } from "@/lib/utils"

interface SelectedPeriodProps {
    selectedPeriod: {
        id: string,
        title: string,
        value: string,
        duration: string
    }
}

const chartData = [
  {device: "desktop", visitors: 4500, fill: "var(--color-desktop)" },
  {device: "mobile", visitors: 6500, fill: "var(--color-mobile)" },
  {device: "tablet", visitors: 2300, fill: "var(--color-tablet)" },
]

const chartConfig = {
    visitors: {
        label: "Visitors"
    },
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)"
    },
    mobile: {
        label: "Mobile",
        color: "var(--chart-2)",
    },
    tablet: {
        label: "Tablet",
        color: "var(--chart-3)",
    },
} satisfies ChartConfig

export function DeviceBreakdownChart({selectedPeriod} : SelectedPeriodProps) {
  const totalUsers = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
            <CardTitle>Device Breakdown</CardTitle>
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
                content={<ChartTooltipContent 
                    indicator="line"
                    valueFormatter={(value) => formatNumber(Number(value))}
                    />}
                />
                <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="device"
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
                        {payload.device}
                    </text>
                    )
                }}
                innerRadius={50}
                strokeWidth={1}
                >
                    <LabelList
                        dataKey="visitors"
                        className="fill-card-featured-foreground"
                        stroke="none"
                        fontSize={12}
                        formatter={(value) =>
                        `${Math.round((Number(value)/totalUsers)*100)}%`
                        }
                    />
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
                                    {formatNumber(totalUsers)} 
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
            Visitor breakdown across mobile, desktop, and tablet this {selectedPeriod.duration} <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
            (Comparision here***) {selectedPeriod.title}
            </div>
        </CardFooter>
    </Card>
  )
}
