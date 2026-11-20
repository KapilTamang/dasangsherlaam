"use client"

import {
  createColumnHelper,
  sortFn_basic,
} from "@tanstack/react-table"
import { ArrowDown, ArrowUp, ArrowUpDown, Medal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { features } from "./features"
import { formatAnalyticsTime, formatNumber } from "@/lib/utils"

export type Category = {
  id: number
  title: string
  blogs: number
  views: number
  shares: number
  likes: number
  averageTime: number
  averageScrollDepth: number
}

type Props = {
    column: any;
    title: string;
    sorted: false | 'asc' | 'desc'
}

const columnHelper = createColumnHelper<typeof features, Category>()

function SortableHeader({
  column,
  title,
  sorted
}: Props) {
  const canSort = column.getCanSort()

  return (
    
    canSort ? (
        <Button
            size="sm"
            className="-ml-3 h-8 bg-transparent hover:bg-transparent text-foreground"
            onClick={column.getToggleSortingHandler()}
            >
            {title}
            {sorted === "asc" ? (
                <ArrowUp className="ml-2 h-4 w-4" />
            ) : sorted === "desc" ? (
                <ArrowDown className="ml-2 h-4 w-4" />
            ) : (
                <ArrowUpDown className="ml-2 h-4 w-4 opacity-50" />
            )}
        </Button>
    ):
    (
         <span className="h-8 pointer-events-none">
            {title}
        </span>
    )
    
  )
}

// Theme-token styles for the top 3 (pulled from your globals.css variables)
const topRankStyles: Record<number, string> = {
  1: "border-transparent bg-primary text-primary-foreground",
  2: "border-transparent bg-accent text-accent-foreground",
  3: "border-border bg-secondary text-secondary-foreground",
}

function RankCell({ rank }: { rank: number }) {
  if (rank > 3) {
    return (
      <span className="pl-2 tabular-nums text-muted-foreground">{rank}</span>
    )
  }
  return (
    <Badge className={cn("gap-1 tabular-nums", topRankStyles[rank])}>
      <Medal className="h-3 w-3" />{rank}
    </Badge>
  )
}

export const columns = columnHelper.columns([
  columnHelper.accessor("id", {
    header: ({ column }) => <SortableHeader column={column} title="Rank" sorted={false}/>,
    cell: ({ getValue }) => (<RankCell rank={getValue()}/>),
    enableSorting: false
  }),
  columnHelper.accessor("title", {
    header: ({ column }) => <SortableHeader column={column} title="Category" sorted={false}/>,
    enableSorting: false
  }),
  columnHelper.accessor("blogs", {
    header: ({ column }) => <SortableHeader column={column} title="Publications" sorted={column.getIsSorted()}/>,
    cell: ({getValue}) => {
        return formatNumber(getValue() as number)
    },
    sortFn: sortFn_basic,
  }),
  columnHelper.accessor("views", {
    header: ({ column }) => <SortableHeader column={column} title="Views" sorted={column.getIsSorted()}/>,
    cell: ({getValue}) => {
        return formatNumber(getValue() as number)
    },
    sortFn: sortFn_basic,
  }),
  columnHelper.accessor("shares", {
    header: ({ column }) => <SortableHeader column={column} title="Shares" sorted={column.getIsSorted()}/>,
    cell: ({getValue}) => {
        return formatNumber(getValue() as number)
    },
    sortFn: sortFn_basic,
  }),
  columnHelper.accessor("likes", {
    header: ({ column }) => <SortableHeader column={column} title="Likes" sorted={column.getIsSorted()}/>,
    cell: ({getValue}) => {
        return formatNumber(getValue() as number)
    },
    sortFn: sortFn_basic,
  }),
  columnHelper.accessor("averageTime", {
    header: ({ column }) => <SortableHeader column={column} title="Average Time" sorted={column.getIsSorted()}/>,
    cell: ({getValue}) => {
        return formatAnalyticsTime(getValue() as number) 
    },
    sortFn: sortFn_basic,
  }),
  columnHelper.accessor("averageScrollDepth", {
    header: ({ column }) => <SortableHeader column={column} title="Average Scroll Depth" sorted={column.getIsSorted()}/>,
    cell: ({getValue}) => {
        return getValue() as number + '%'
    },
    sortFn: sortFn_basic,
  }),
])
