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
  {page: "home", pageViews: 586, fill: 'var(--color-home)'},
  {page: "blog", pageViews: 405, fill: 'var(--color-blog)'},
  {page: "category", pageViews: 237, fill: 'var(--color-category)'},
  {page: "contact", pageViews: 73, fill: 'var(--color-contact)'},
  {page: "search", pageViews: 209, fill: 'var(--color-search)'},
  {page: "about", pageViews: 214, fill: 'var(--color-about)'},
  {page: "policy", pageViews: 165, fill: 'var(--color-policy)'},
]

const chartConfig = {
    pageViews: {
        label: "Page Views"
    },
  home: {
    label: "Home",
    color: "var(--chart-1)",
  },
  blog: {
    label: "Blog",
    color: "var(--chart-2)",
  },
  category: {
    label: "Category",
    color: "var(--chart-3)",
  },
  contact: {
    label: "Contact",
    color: "var(--chart-4)",
  },
  search: {
    label: "Search",
    color: "var(--chart-5)",
  },
  about: {
    label: "About",
    color: "var(--chart-6)"
  },
  policy: {
    label: "Policy",
    color: "var(--chart-7)"
  },
} satisfies ChartConfig

export function PageViewsOnPagesChart({selectedPeriod}: SelectedPeriodProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Page Views on Pages</CardTitle>
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
              dataKey="page"
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
          Showing total Page Views on pages for the {selectedPeriod.title}
        </div>
      </CardFooter>
    </Card>
  )
}
