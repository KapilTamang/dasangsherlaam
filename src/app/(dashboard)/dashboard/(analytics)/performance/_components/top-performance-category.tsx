import { DataTable } from "../../../data-table/top-performance-category-table/data-table"
import { columns, type Category } from "../../../data-table/top-performance-category-table/columns"
import categories from "@/data/category"

const data: Category[] = categories

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
            />
        </div>
    )
}