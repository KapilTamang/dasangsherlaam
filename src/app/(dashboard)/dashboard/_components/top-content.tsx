import { DataTable } from "../data-table/top-performance-content-table/data-table"
import { columns, type Blog } from "../data-table/top-performance-content-table/columns"
import blogs from "@/data/blogs"

interface SelectedPeriodProps {
    selectedPeriod: {
        id: string,
        title: string,
        value: string,
        duration: string
    }
}

const data: Blog[] = blogs

export  function TopContent({selectedPeriod}: SelectedPeriodProps) {
    return(
        <div className="w-full flex flex-col gap-4 bg-secondary p-4 md:p-6 rounded-xl">
             <div className="font-medium">Top Contents 
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