"use client"

import React from 'react';
import { PeriodSelector } from "../../_components/period-selector"
import { KPICard } from '../../_components/KPICard';
import {PageViewsUniqueVisitorsChart} from './_components/page-views-unique-visitors-chart'
import { PageViewsPerVisitorChart } from './_components/page-views-per-visitor-chart';

export default function ReaderTraffic() {
    //Set state for selected period
    const [selectedPeriod, setSelectedPeriod] = React.useState({
        id: "",
        title: "",
        value: "",
        duration: ""
    });

    const KPICardsData = [
        {
			title: '32.345K',
			description: 'Page Views',
			badgeTitle: 20,
			trending: 'negative',
			remarks: 'Declining audience interests'
		},
		{
			title: '4.34K',
			description: 'Unique Visitors',
			badgeTitle: 9.5,
			trending: 'positive',
			remarks: 'Unique visitors trending up'
		},
		{
			title: '3.22s',
			description: 'Average Time',
			badgeTitle: 8.4,
			trending: 'positive',
			remarks: 'Decent increment on engagement'
		},
		{
			title: '2.3pp',
			description: 'Bounce Rate',
			badgeTitle: 17,
			trending: 'positive',
			remarks: 'Strong user acquitision'
		}
	]

    return (
       <div className="dashboard-home">
            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                        <PeriodSelector getSelectedPeriod={setSelectedPeriod}/>
                        <section className="kpi-cards-analytics">
                            <div  className="grid grid-cols-1 gap-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
                                {
                                    KPICardsData.map((cardData, _index) => (
                                        <KPICard key={_index} selectedPeriod={selectedPeriod} data={cardData}/>
                                    ))
                                }
                            </div>
                        </section>
                        <section className="page-views-chart lg:px-6">
                            <PageViewsUniqueVisitorsChart/>
                        </section>
                        <section className="page-views-per-visitor-chart lg:px-6">
                            <PageViewsPerVisitorChart/>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}