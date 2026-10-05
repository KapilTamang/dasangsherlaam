"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

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
    selectedPeriod : {
        id: string,
        title: string,
        value: string,
        duration: string
    }
}

const chartData = [
  {category: "featured", pageViews: 456, fill: 'var(--color-featured)'},
  {category: "scienceAndTechnology", pageViews: 305, fill: 'var(--color-scienceAndTechnology)'},
  {category: "amazingFacts", pageViews: 137, fill: 'var(--color-amazingFacts)'},
  {category: "historyAndCulture", pageViews: 173, fill: 'var(--color-historyAndCulture)'},
  {category: "travelAndTourism", pageViews: 109, fill: 'var(--color-travelAndTourism)'},
  {category: "exclusive", pageViews: 514, fill: 'var(--color-exclusive)'},
]

const chartConfig = {
    pageViews: {
        label: "Page Views"
    },
  featured: {
    label: "Featured",
    color: "var(--chart-1)",
  },
  scienceAndTechnology: {
    label: "Science and Technology",
    color: "var(--chart-2)",
  },
  amazingFacts: {
    label: "Amazing Facts",
    color: "var(--chart-3)",
  },
  historyAndCulture: {
    label: "History and Culture",
    color: "var(--chart-4)",
  },
  travelAndTourism: {
    label: "Travel and Tourism",
    color: "var(--chart-5)",
  },
  exclusive: {
    label: "Exclusive",
    color: "var(--chart-6)"
  },
} satisfies ChartConfig

export function PageViewsByCategoriesChart({selectedPeriod}: SelectedPeriodProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Page Views By Categories</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-50 w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="category"
              tick={{fill: 'var(--color-foreground)'}}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent/>}
            />
            <Bar dataKey="pageViews" fill="fill" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this {selectedPeriod.duration} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground">
          Showing total page views by categories for the {selectedPeriod.title}
        </div>
      </CardFooter>
    </Card>
  )
}
