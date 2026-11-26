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

const chartData = [
  {device: "desktop", users: 45000, fill: "var(--color-desktop)" },
  {device: "mobile", users: 65300, fill: "var(--color-mobile)" },
  {device: "tablet", users: 23100, fill: "var(--color-tablet)" },
]

const chartConfig = {
    users: {
        label: "Users"
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

export function DeviceBreakdownChart() {
  const totalUsers = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.users, 0)
  }, [])

  return (
    <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
            <CardTitle>Device Breakdown</CardTitle>
            <CardDescription>Overall Traffic distribution by device category</CardDescription>
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
                dataKey="users"
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
                innerRadius={60}
                outerRadius={95}
                strokeWidth={1}
                >
                    <LabelList
                        dataKey="users"
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
                                    Users
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
               Conclusion here
            </div>
            <div className="leading-none text-muted-foreground">
            (Comparision here***)
            </div>
        </CardFooter>
    </Card>
  )
}
