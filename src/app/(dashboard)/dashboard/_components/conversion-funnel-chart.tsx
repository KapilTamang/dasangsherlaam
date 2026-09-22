"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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

import { TrendingUp, ArrowBigDown } from "lucide-react"

const chartData = [
	{user: 'visitors', total: 700, percentage: '100%', fill: 'var(--color-visitors)'},
	{user: 'registrants', total: 320, percentage: '62%', fill: 'var(--color-registrants)'},
	{user: 'subscribers', total: 120, percentage: '12%', fill: 'var(--color-subscribers)'},
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
			<ChartContainer config={chartConfig}>
				<BarChart
					accessibilityLayer
					data={chartData}
					layout="vertical"
					margin={{
					left: 24
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
					<XAxis dataKey="total" type="number" hide />
					<ChartTooltip
					cursor={false}
					content={<ChartTooltipContent indicator="line" />}
					/>
					<Bar dataKey="total" fill="var(--color-fill)" radius={4}/>
				</BarChart>
			</ChartContainer>
		</CardContent>
		<div className="conversion w-full flex flex-col gap-2 items-center">
			<span className="capitalize font-medium">
				visitors ({chartData[0].total})
			</span>
			<span className="icon flex gap-1 items-center">
				<ArrowBigDown className="w-5 h-5 text-primary"/>{chartData[1].percentage}
			</span>
			<div className="capitalize font-medium">
				registrants ({chartData[1].total})
			</div>
			<span className="icon flex gap-1 items-center">
				<ArrowBigDown className="w-5 h-5 text-primary"/>{chartData[2].percentage}
			</span>
			<div className="capitalize font-medium">
				subscribers ({chartData[2].total})
			</div>
		</div>
		<CardFooter className="flex-col items-start gap-2 text-sm">
			<div className="flex gap-2 leading-none font-medium">
				Trending up by 5.2% this {selectedPeriod.duration} <TrendingUp className="h-4 w-4" />
			</div>
			<div className="leading-none text-muted-foreground">
				Showing total visitors for the {selectedPeriod.title}
			</div>
		</CardFooter>
    </Card>
  )
}
