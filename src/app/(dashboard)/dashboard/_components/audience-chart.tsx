"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

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
  { visitor: "overall", total: 1000, percentage: 100, fill: "var(--color-overall)" },
  { visitor: "new", total: 750, percentage: 75, fill: "var(--color-new)" },
  { visitor: "returning", total: 250, percentage: 25, fill: "var(--color-returning)"}
]

const chartConfig = {
  overall: {
    label: "Total Visitors",
    color: "var(--chart-1)",
  },
  new: {
    label: "New Visitors",
    color: "var(--chart-2)",
  },
 returning: {
    label: "Returning Visitors",
    color: "var(--chart-3)"
 },
} satisfies ChartConfig

export function AudienceChart({selectedPeriod} : SelectedPeriodProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Audience</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-square max-h-50 w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
                left: 10,
                right: 36
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
            dataKey="visitor"
            type="category"
            tick={{fill: 'var(--color-foreground)'}}
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
            }
            />
            <XAxis dataKey="percentage" type="number" hide/>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar dataKey="percentage" fill="var(--color-fill)" radius={4}>
              <LabelList
                dataKey="total"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Returning vistors 25% this {selectedPeriod.duration} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showinig visitors for the {selectedPeriod.title}
        </div>
      </CardFooter>
    </Card>
  )
}
