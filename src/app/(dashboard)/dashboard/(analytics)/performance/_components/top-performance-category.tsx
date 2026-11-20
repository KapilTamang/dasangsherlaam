import { DataTable } from "../../../data-table/top-performance-content-table/data-table"
import { columns, type Blog } from "../../../data-table/top-performance-content-table/columns"
import blogs from "@/data/blogs"

const data: Blog[] = blogs

interface SelectedPeriodProps {
    selectedPeriod : {
        id: string,
        title: string,
        value: string,
        duration: string
    }
}

export  function TopPerformanceCategory({selectedPeriod} : SelectedPeriodProps) {
    return(
        <div className="w-full flex flex-col gap-4 bg-secondary p-4 md:p-6 rounded-xl">
            <div className="font-medium">Top Performing Categories 
                <span className="font-normal capitalize"> (last {selectedPeriod.duration})</span>
            </div>
            <DataTable
                columns={columns}
                data={data}
                filterColumnId="category"
                filterLabel="Categories"
            />
        </div>
    )
}