import { DataTable } from "../../../data-table/top-referral-websites-table/data-table"
import { columns, type Referral } from "../../../data-table/top-referral-websites-table/columns"

const data: Referral[] = [
    {
        id: 1,
        title: 'google',
        visitors: 42456,
    },
    {
        id: 2,
        title: 'facebook',
        visitors: 23780,
    },
    {
        id: 3,
        title: 'reddit',
        visitors: 19870,
    },
    {
        id: 4,
        title: 'linkedin',
        visitors: 9456,
    },
    {
        id: 5,
        title: 'pininterest',
        visitors: 5560,
    },
    {
        id: 6,
        title: 'others',
        visitors: 1560,
    },
]

interface SelectedPeriodProps {
    selectedPeriod : {
        id: string,
        title: string,
        value: string,
        duration: string
    }
}

export  function TopReferralWebsites({selectedPeriod} : SelectedPeriodProps) {
    return(
        <div className="w-full flex flex-col gap-4 bg-secondary p-4 md:p-6 rounded-xl">
            <div className="font-medium">Top Referral Websites 
                <span className="font-normal capitalize"> (last {selectedPeriod.duration})</span>
            </div>
            <DataTable
                columns={columns}
                data={data}
            />
        </div>
    )
}