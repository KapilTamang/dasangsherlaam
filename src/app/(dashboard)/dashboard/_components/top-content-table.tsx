import { DataTable } from "../data-table/top-performance-content-table/data-table"
import { columns, type Blog } from "../data-table/top-performance-content-table/columns"
import blogs from "@/data/blogs"

const data: Blog[] = blogs

export  function TopContentTable() {
    return(
        <div className="container mx-auto py-5">
            <DataTable
                columns={columns}
                data={data}
                filterColumnId="category"
                filterLabel="Categories"
            />
        </div>
    )
}