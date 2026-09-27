"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis} from "recharts"

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

import { TrendingUp} from "lucide-react"

const chartData = [
	{user: 'visitors', total: 7000, percentage: 100, fill: 'var(--color-visitors)'},
	{user: 'registrants', total: 320, percentage: 62, fill: 'var(--color-registrants)'},
	{user: 'subscribers', total: 120, percentage: 12, fill: 'var(--color-subscribers)'},
	{user: 'unconverted', total: 260, percentage: 26, fill: 'var(--color-unconverted)'},
]

const chartConfig = {
	visitors: {
		label: "Visitors",
		color: "var(--chart-1)",
	},
	registrants: {
		label: "Registrants",
		color: "var(--chart-2)",
	},
	subscribers: {
		label: "Subscribers",
		color: "var(--chart-3)",
	},
	unconverted: {
		label: "Unconverted",
		color: "var(--chart-4)",
	},
} satisfies ChartConfig

interface SelectedPeriodProps  {
    selectedPeriod : {
        id: string,
        title: string,
        value: string,
        duration: string
    }
}

export function ConversionFunnelChart({selectedPeriod}: SelectedPeriodProps) {
  return (
    <Card>
		<CardHeader>
			<CardTitle>Conversion Funnel</CardTitle>
			<CardDescription> January - March 2026 </CardDescription>
		</CardHeader>
		<CardContent>
			<ChartContainer config={chartConfig} className="aspect-square max-h-60 w-full">
				<BarChart
					accessibilityLayer
					data={chartData}
					layout="vertical"
					margin={{
					left: 30,
					right: 30
					}}
				>
					<CartesianGrid horizontal={false} />
					<YAxis
					dataKey="user"
					type="category"
					tick={{fill: 'var(--color-foreground)'}}
					tickLine={false}
					tickMargin={10}
					axisLine={false}
					tickFormatter={(value) =>
						chartConfig[value as keyof typeof chartConfig]?.label
					}
					/>
					<XAxis dataKey="percentage" type="number" hide />
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
				Conversion up by 5.2% this {selectedPeriod.duration} <TrendingUp className="h-4 w-4" />
			</div>
			<div className="leading-none text-muted-foreground">
				Converted visitors for the {selectedPeriod.title}
			</div>
		</CardFooter>
    </Card>
  )
}
