"use client"

import { useTable, type ColumnDef } from "@tanstack/react-table"
import {
  RotateCcw,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { features } from "./features"


interface DataTableProps<TData extends Record<string, any>> {
  columns: ColumnDef<typeof features, TData, any>[]
  data: TData[]
}

export function DataTable<TData extends Record<string, any>>({
  columns,
  data,
}: DataTableProps<TData>) {

  const table = useTable({
    features,
    columns,
    data
  })

  const { sorting} = table.state

  const isDirty = sorting.length > 0 

  return (
    <div className="space-y-4 rounded-xl">
        <div className="flex items-center">
            <span className="text-muted-foreground">Category based data for insights</span>
            <Button
                variant="outline"
                onClick={() => table.reset()}
                disabled={!isDirty}
                className="sm:ml-auto"
                >
                <RotateCcw className="mr-2 h-4 w-4" />
                    Reset
            </Button>
        </div>
      {/* Table */}
      <div className="rounded-md border bg-card text-card-foreground">
            <Table>
                <TableHeader className="bg-accent">
                    {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                        <TableHead key={header.id} colSpan={header.colSpan}>
                            {header.isPlaceholder ? null : (
                            <table.FlexRender header={header} />
                            )}
                        </TableHead>
                        ))}
                    </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows.length ? (
                    table.getRowModel().rows.map((row) => (
                        <TableRow key={row.id}>
                        {row.getAllCells().map((cell) => (
                            <TableCell key={cell.id} className="capitalize">
                            <table.FlexRender cell={cell}/>
                            </TableCell>
                        ))}
                        </TableRow>
                    ))
                    ) : (
                    <TableRow>
                        <TableCell
                        colSpan={columns.length}
                        className="h-24 text-center text-muted-foreground"
                        >
                        No results.
                        </TableCell>
                    </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    </div>
  )
}