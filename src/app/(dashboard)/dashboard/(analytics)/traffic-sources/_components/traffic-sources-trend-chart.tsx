"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"

import { formatNumber } from "@/lib/utils"

const chartData = [
  { date: "2024-04-01", organic: 222, direct: 150, social: 350, email: 200, referral: 130 },
  { date: "2024-04-02", organic: 97, direct: 180, social: 200, email: 120, referral: 78 },
  { date: "2024-04-03", organic: 167, direct: 120, social: 190, email: 133, referral: 56 },
  { date: "2024-04-04", organic: 242, direct: 260, social: 290, email: 202, referral: 90 },
  { date: "2024-04-05", organic: 373, direct: 290, social: 340, email: 265, referral: 206 },
  { date: "2024-04-06", organic: 301, direct: 340, social: 400, email: 280, referral: 180 },
  { date: "2024-04-07", organic: 245, direct: 180, social: 276, email: 200, referral: 160 },
  { date: "2024-04-08", organic: 409, direct: 320, social: 500, email: 302, referral: 230 },
  { date: "2024-04-09", organic: 59, direct: 110, social: 245, email: 176, referral: 123 },
  { date: "2024-04-10", organic: 261, direct: 190, social: 345, email: 280, referral: 194 },
  { date: "2024-04-11", organic: 327, direct: 350, social: 503, email: 302, referral: 206 },
  { date: "2024-04-12", organic: 292, direct: 210, social: 240, email: 165, referral: 98 },
  { date: "2024-04-13", organic: 342, direct: 380, social: 405, email: 265, referral: 129 },
  { date: "2024-04-14", organic: 137, direct: 220, social: 305, email: 188, referral: 140 },
  { date: "2024-04-15", organic: 120, direct: 170, social: 250, email: 120, referral: 105 },
  { date: "2024-04-16", organic: 138, direct: 190, social: 310, email: 110, referral: 85 },
  { date: "2024-04-17", organic: 446, direct: 360, social: 450, email: 320, referral: 130 },
  { date: "2024-04-18", organic: 364, direct: 410, social: 540, email: 230, referral: 200 },
  { date: "2024-04-19", organic: 243, direct: 180, social: 360, email: 150, referral: 187 },
  { date: "2024-04-20", organic: 89, direct: 150, social: 230, email: 176, referral: 125 },
  { date: "2024-04-21", organic: 137, direct: 200, social: 290, email: 153, referral: 75 },
  { date: "2024-04-22", organic: 224, direct: 170, social: 275, email: 100, referral: 98 },
  { date: "2024-04-23", organic: 138, direct: 230, social: 300, email: 210, referral: 147 },
  { date: "2024-04-24", organic: 387, direct: 290, social: 380, email: 203, referral: 180 },
  { date: "2024-04-25", organic: 215, direct: 250, social: 290, email: 126, referral: 250 },
  { date: "2024-04-26", organic: 75, direct: 130, social: 320, email: 204, referral: 130 },
  { date: "2024-04-27", organic: 383, direct: 420, social: 360, email: 190, referral: 250 },
  { date: "2024-04-28", organic: 122, direct: 180, social: 360, email: 240, referral: 145 },
  { date: "2024-04-29", organic: 315, direct: 240, social: 200, email: 145, referral: 160 },
  { date: "2024-04-30", organic: 454, direct: 380, social: 540, email: 343, referral: 145 },
  { date: "2024-05-01", organic: 222, direct: 150, social: 350, email: 200, referral: 130 },
  { date: "2024-05-02", organic: 97, direct: 180, social: 200, email: 120, referral: 78 },
  { date: "2024-05-03", organic: 167, direct: 120, social: 190, email: 133, referral: 56 },
  { date: "2024-05-04", organic: 242, direct: 260, social: 290, email: 202, referral: 90 },
  { date: "2024-05-05", organic: 373, direct: 290, social: 340, email: 265, referral: 206 },
  { date: "2024-05-06", organic: 301, direct: 340, social: 400, email: 280, referral: 180 },
  { date: "2024-05-07", organic: 245, direct: 180, social: 276, email: 200, referral: 160 },
  { date: "2024-05-08", organic: 409, direct: 320, social: 500, email: 302, referral: 230 },
  { date: "2024-05-09", organic: 59, direct: 110, social: 245, email: 176, referral: 123 },
  { date: "2024-05-10", organic: 261, direct: 190, social: 345, email: 280, referral: 194 },
  { date: "2024-05-11", organic: 327, direct: 350, social: 503, email: 302, referral: 206 },
  { date: "2024-05-12", organic: 292, direct: 210, social: 240, email: 165, referral: 98 },
  { date: "2024-05-13", organic: 342, direct: 380, social: 405, email: 265, referral: 129 },
  { date: "2024-05-14", organic: 137, direct: 220, social: 305, email: 188, referral: 140 },
  { date: "2024-05-15", organic: 120, direct: 170, social: 250, email: 120, referral: 105 },
  { date: "2024-05-16", organic: 138, direct: 190, social: 310, email: 110, referral: 85 },
  { date: "2024-05-17", organic: 446, direct: 360, social: 450, email: 320, referral: 130 },
  { date: "2024-05-18", organic: 364, direct: 410, social: 540, email: 230, referral: 200 },
  { date: "2024-05-19", organic: 243, direct: 180, social: 360, email: 150, referral: 187 },
  { date: "2024-05-20", organic: 89, direct: 150, social: 230, email: 176, referral: 125 },
  { date: "2024-05-21", organic: 137, direct: 200, social: 290, email: 153, referral: 75 },
  { date: "2024-05-22", organic: 224, direct: 170, social: 275, email: 100, referral: 98 },
  { date: "2024-05-23", organic: 138, direct: 230, social: 300, email: 210, referral: 147 },
  { date: "2024-05-24", organic: 387, direct: 290, social: 380, email: 203, referral: 180 },
  { date: "2024-05-25", organic: 215, direct: 250, social: 290, email: 126, referral: 250 },
  { date: "2024-05-26", organic: 75, direct: 130, social: 320, email: 204, referral: 130 },
  { date: "2024-05-27", organic: 383, direct: 420, social: 360, email: 190, referral: 250 },
  { date: "2024-05-28", organic: 122, direct: 180, social: 360, email: 240, referral: 145 },
  { date: "2024-05-29", organic: 315, direct: 240, social: 200, email: 145, referral: 160 },
  { date: "2024-05-30", organic: 454, direct: 380, social: 540, email: 343, referral: 145 },
  { date: "2024-06-01", organic: 222, direct: 150, social: 350, email: 200, referral: 130 },
  { date: "2024-06-02", organic: 97, direct: 180, social: 200, email: 120, referral: 78 },
  { date: "2024-06-03", organic: 167, direct: 120, social: 190, email: 133, referral: 56 },
  { date: "2024-06-04", organic: 242, direct: 260, social: 290, email: 202, referral: 90 },
  { date: "2024-06-05", organic: 373, direct: 290, social: 340, email: 265, referral: 206 },
  { date: "2024-06-06", organic: 301, direct: 340, social: 400, email: 280, referral: 180 },
  { date: "2024-06-07", organic: 245, direct: 180, social: 276, email: 200, referral: 160 },
  { date: "2024-06-08", organic: 409, direct: 320, social: 500, email: 302, referral: 230 },
  { date: "2024-06-09", organic: 59, direct: 110, social: 245, email: 176, referral: 123 },
  { date: "2024-06-10", organic: 261, direct: 190, social: 345, email: 280, referral: 194 },
  { date: "2024-06-11", organic: 327, direct: 350, social: 503, email: 302, referral: 206 },
  { date: "2024-06-12", organic: 292, direct: 210, social: 240, email: 165, referral: 98 },
  { date: "2024-06-13", organic: 342, direct: 380, social: 405, email: 265, referral: 129 },
  { date: "2024-06-14", organic: 137, direct: 220, social: 305, email: 188, referral: 140 },
  { date: "2024-06-15", organic: 120, direct: 170, social: 250, email: 120, referral: 105 },
  { date: "2024-06-16", organic: 138, direct: 190, social: 310, email: 110, referral: 85 },
  { date: "2024-06-17", organic: 446, direct: 360, social: 450, email: 320, referral: 130 },
  { date: "2024-06-18", organic: 364, direct: 410, social: 540, email: 230, referral: 200 },
  { date: "2024-06-19", organic: 243, direct: 180, social: 360, email: 150, referral: 187 },
  { date: "2024-06-20", organic: 89, direct: 150, social: 230, email: 176, referral: 125 },
  { date: "2024-06-21", organic: 137, direct: 200, social: 290, email: 153, referral: 75 },
  { date: "2024-06-22", organic: 224, direct: 170, social: 275, email: 100, referral: 98 },
  { date: "2024-06-23", organic: 138, direct: 230, social: 300, email: 210, referral: 147 },
  { date: "2024-06-24", organic: 387, direct: 290, social: 380, email: 203, referral: 180 },
  { date: "2024-06-25", organic: 215, direct: 250, social: 290, email: 126, referral: 250 },
  { date: "2024-06-26", organic: 75, direct: 130, social: 320, email: 204, referral: 130 },
  { date: "2024-06-27", organic: 383, direct: 420, social: 360, email: 190, referral: 250 },
  { date: "2024-06-28", organic: 122, direct: 180, social: 360, email: 240, referral: 145 },
  { date: "2024-06-29", organic: 315, direct: 240, social: 200, email: 145, referral: 160 },
  { date: "2024-06-30", organic: 454, direct: 380, social: 540, email: 343, referral: 145 },
]

const chartConfig = {
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
  email: {
    label: "Email",
    color: "var(--chart-4)",
  },
  referral: {
    label: "Referral",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig


export function TrafficSourcesTrendChart() {
    const isMobile = useIsMobile();
    const [timeRange, setTimeRange] = React.useState("30")
    
    
      //Only weekly chart for mobile devices
        React.useEffect(() => {
        if (isMobile) {
          setTimeRange("7")
        }
      }, [isMobile])
    
      const filteredData = chartData.filter((item) => {
        const date = new Date(item.date)
        const referenceDate = new Date("2024-06-30")
        const daysToSubtract = Number(timeRange);
    
        const startDate = new Date(referenceDate)
        startDate.setDate(startDate.getDate() - daysToSubtract)
        return date >= startDate
      });
    
      return (
        <Card className="pt-0">
            <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
                <div className="grid flex-1 gap-1">
                    <CardTitle>Traffic Trends</CardTitle>
                    <CardDescription>
                        Showing visitors from different traffic channels for the last {timeRange === '7' ? 'week' : timeRange === '30' ? 'month' : timeRange === '90' ? 'quarter' : 'year'} 
                    </CardDescription>
                </div>
                <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger
                        className="hidden w-40 rounded-lg sm:ml-auto sm:flex"
                        aria-label="Select a value"
                    >
                        <SelectValue/>
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                        <SelectItem value="7" className="rounded-lg">
                        Last 7 days
                        </SelectItem>
                        <SelectItem value="30" className="rounded-lg">
                        Last 30 days
                        </SelectItem>
                        <SelectItem value="90" className="rounded-lg">
                        Last 3 months
                        </SelectItem>
                        <SelectItem value="365" className="rounded-lg">
                        Last 12 months
                        </SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ChartContainer
                config={chartConfig}
                className="aspect-auto h-62.5 w-full"
                >
                    <AreaChart data={filteredData}>
                        <defs>
                        <linearGradient id="fillOrganic" x1="0" y1="0" x2="0" y2="1">
                            <stop
                            offset="5%"
                            stopColor="var(--color-organic)"
                            stopOpacity={0.8}
                            />
                            <stop
                            offset="95%"
                            stopColor="var(--color-organic)"
                            stopOpacity={0.1}
                            />
                        </linearGradient>
                        <linearGradient id="fillDirect" x1="0" y1="0" x2="0" y2="1">
                            <stop
                            offset="5%"
                            stopColor="var(--color-direct)"
                            stopOpacity={0.8}
                            />
                            <stop
                            offset="95%"
                            stopColor="var(--color-direct)"
                            stopOpacity={0.1}
                            />
                        </linearGradient>
                        <linearGradient id="fillSocial" x1="0" y1="0" x2="0" y2="1">
                            <stop
                            offset="5%"
                            stopColor="var(--color-social)"
                            stopOpacity={0.8}
                            />
                            <stop
                            offset="95%"
                            stopColor="var(--color-social)"
                            stopOpacity={0.1}
                            />
                        </linearGradient>
                        <linearGradient id="fillEmail" x1="0" y1="0" x2="0" y2="1">
                            <stop
                            offset="5%"
                            stopColor="var(--color-email)"
                            stopOpacity={0.8}
                            />
                            <stop
                            offset="95%"
                            stopColor="var(--color-email)"
                            stopOpacity={0.1}
                            />
                        </linearGradient>
                        <linearGradient id="fillReferral" x1="0" y1="0" x2="0" y2="1">
                            <stop
                            offset="5%"
                            stopColor="var(--color-referral)"
                            stopOpacity={0.8}
                            />
                            <stop
                            offset="95%"
                            stopColor="var(--color-referral)"
                            stopOpacity={0.1}
                            />
                        </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} />
                        <XAxis
                        dataKey="date"
                            tick={{fill: 'var(--color-foreground)'}}
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        minTickGap={32}
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
                        content={
                            <ChartTooltipContent
                            labelFormatter={(value) => {
                                return new Date(String(value)).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                })
                            }}
                            valueFormatter={(value) => formatNumber(Number(value))}
                            indicator="dot"
                            />
                        }
                        />
                        <Area
                        dataKey="organic"
                        type="natural"
                        fill="url(#fillOrganic)"
                        stroke="var(--color-organic)"
                        stackId="a"
                        />
                        <Area
                        dataKey="direct"
                        type="natural"
                        fill="url(#fillDirect)"
                        stroke="var(--color-direct)"
                        stackId="a"
                        />
                        <Area
                        dataKey="social"
                        type="natural"
                        fill="url(#fillSocial)"
                        stroke="var(--color-social)"
                        stackId="a"
                        />
                        <Area
                        dataKey="email"
                        type="natural"
                        fill="url(#fillEmail)"
                        stroke="var(--color-email)"
                        stackId="a"
                        />
                        <Area
                        dataKey="referral"
                        type="natural"
                        fill="url(#fillReferral)"
                        stroke="var(--color-referral)"
                        stackId="a"
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}