import { DataTable } from "../../../data-table/traffic-channel-performance/data-table"
import { columns, type Channel } from "../../../data-table/traffic-channel-performance/columns"

const data: Channel[] = [
    {
        id: 1,
        title: 'Organic',
        sessions: 12456,
        bounceRate: 45
    },
    {
        id: 2,
        title: 'Direct',
        sessions: 10780,
        bounceRate: 67
    },
    {
        id: 3,
        title: 'Social',
        sessions: 9870,
        bounceRate: 34
    },
    {
        id: 4,
        title: 'Email',
        sessions: 8456,
        bounceRate: 40
    },
    {
        id: 5,
        title: 'Referral',
        sessions: 5560,
        bounceRate: 62
    },
    {
        id: 6,
        title: 'Ads',
        sessions: 4560,
        bounceRate: 70
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

export  function TrafficChannelPerformance({selectedPeriod} : SelectedPeriodProps) {
    return(
        <div className="w-full flex flex-col gap-4 bg-secondary p-4 md:p-6 rounded-xl">
            <div className="font-medium">Traffic Channel Performance 
                <span className="font-normal capitalize"> (last {selectedPeriod.duration})</span>
            </div>
            <DataTable
                columns={columns}
                data={data}
            />
        </div>
    )
}