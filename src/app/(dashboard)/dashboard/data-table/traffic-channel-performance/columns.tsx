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
import { formatNumber } from "@/lib/utils"

export type Channel = {
    id: number
    title: string
    sessions: number
    bounceRate: number
}

type Props = {
    column: any;
    title: string;
    sorted: false | 'asc' | 'desc'
}

const columnHelper = createColumnHelper<typeof features, Channel>()

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
    header: ({ column }) => <SortableHeader column={column} title="Channel" sorted={false}/>,
    enableSorting: false
  }),
  columnHelper.accessor("sessions", {
    header: ({ column }) => <SortableHeader column={column} title="Sessions" sorted={column.getIsSorted()}/>,
    cell: ({getValue}) => {
        return formatNumber(getValue() as number)
    },
    sortFn: sortFn_basic,
  }),
  columnHelper.accessor("bounceRate", {
    header: ({ column }) => <SortableHeader column={column} title="Bounce Rate" sorted={column.getIsSorted()}/>,
    cell: ({getValue}) => {
        return getValue() as number + '%'
    },
    sortFn: sortFn_basic,
  }),
])
