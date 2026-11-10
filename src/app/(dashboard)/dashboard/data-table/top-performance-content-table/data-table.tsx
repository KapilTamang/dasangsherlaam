"use client"

import * as React from "react"
import { useTable, type ColumnDef } from "@tanstack/react-table"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  RotateCcw,
  Search,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { features } from "./features"


const PAGE_SIZES = [10, 20, 50] // minimum 10 rows per page

interface DataTableProps<TData extends Record<string, any>> {
  columns: ColumnDef<typeof features, TData, any>[]
  data: TData[]
  /** Column id used by the dropdown filter (options are derived from data) */
  filterColumnId?: string
  filterLabel?: string
  searchPlaceholder?: string
  selectedPeriod?: []
}

export function DataTable<TData extends Record<string, any>>({
  columns,
  data,
  filterColumnId,
  filterLabel = "Filter",
  searchPlaceholder = "Search by title...",
  selectedPeriod
}: DataTableProps<TData>) {

  const table = useTable({
    features,
    columns,
    data,
    globalFilterFn: "includesString",
    initialState: { pagination: { pageIndex: 0, pageSize: 10 } },
  })

  const { globalFilter, columnFilters, sorting, pagination } = table.state

  // Unique filter options built from the data
  const filterOptions = React.useMemo(() => {
    if (!filterColumnId) return []
    return Array.from(new Set(data.map((row) => String(row[filterColumnId]))))
      .sort()
      .map((value) => ({ label: value, value }))
  }, [data, filterColumnId])

  const filterColumn = filterColumnId
    ? table.getColumn(filterColumnId)
    : undefined
  const filterValue = (filterColumn?.getFilterValue() as string) ?? "all"

  const isDirty =
    !!globalFilter ||
    columnFilters.length > 0 ||
    sorting.length > 0 ||
    pagination.pageIndex !== 0 ||
    pagination.pageSize !== 10

  const filteredCount = table.getFilteredRowModel().rows.length
  const pageCount = table.getPageCount()

  return (
    <div className="space-y-4 rounded-xl">
      {/* Toolbar */}
      <div className="flex flex-col gap-4 justify-between sm:flex-row sm:items-center">
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-2.5 top-4 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={searchPlaceholder}
            value={globalFilter ?? ""}
            onChange={(e) => table.setGlobalFilter(e.target.value)}
            className="pl-8 bg-background"
          />
        </div>
        <div className="flex items-center gap-4">
            {filterColumn && (
            <Select
                value={filterValue}
                onValueChange={(v) =>
                filterColumn.setFilterValue(v === "all" ? undefined : v)
                }
            >
                <SelectTrigger className="w-full sm:w-60 bg-background">
                <SelectValue placeholder={filterLabel} />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="all">All {filterLabel}</SelectItem>
                {filterOptions.map((o) => (
                    <SelectItem key={o.value} value={o.value}>
                    {o.label}
                    </SelectItem>
                ))}
                </SelectContent>
            </Select>
            )}

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
                      <table.FlexRender cell={cell} />
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

      {/* Pagination */}
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        {/* <span>, not <p>: your globals.css restyles every <p> */}
        <span className="text-sm text-muted-foreground">
          {filteredCount} row(s) total
        </span>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Rows per page</span>
            <Select
              value={String(pagination.pageSize)}
              onValueChange={(v) => table.setPageSize(Number(v))}
            >
              <SelectTrigger className="h-8 w-17.5">
                <SelectValue />
              </SelectTrigger>
              <SelectContent side="top">
                {PAGE_SIZES.map((size) => (
                  <SelectItem key={size} value={String(size)}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <span className="text-sm font-medium">
            Page {pagination.pageIndex + 1} of {Math.max(pageCount, 1)}
          </span>

          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => table.firstPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => table.lastPage()}
              disabled={!table.getCanNextPage()}
            >
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}