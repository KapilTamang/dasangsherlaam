"use client"

import React from 'react';
import { KPICard } from '../../_components/KPICard';
import { PeriodSelector } from '../../_components/period-selector';
import { UserRoundGroup, UserRoundKey, ClockCheck, Waypoints } from 'lucide-react';
import { AudienceOverviewChart } from './_components/audience-overview-chart';

export default function AudienceAndDevices() {
    //Set state for selected period
    const [selectedPeriod, setSelectedPeriod] = React.useState({
        id: "",
        title: "",
        value: "",
        duration: ""
    });

     const KPICardData = [
        {
			title: 32345,
			description: 'Total Visitors',
			badgeTitle: 20,
			trending: 'negative',
			remarks: 'Declining audience interests',
            format: 'count',
            icon: UserRoundGroup
		},
		{
			title: 43400,
			description: 'Unique Visitors',
			badgeTitle: 9.5,
			trending: 'positive',
			remarks: 'Unique visitors trending up',
            format: 'count',
            icon: UserRoundKey
		},
		{
			title: 285000,
			description: 'Average Session',
			badgeTitle: 8.4,
			trending: 'positive',
			remarks: 'Decent increment on engagement',
            format: 'time',
            icon: ClockCheck
		},
		{
			title: 46.5,
			description: 'Bounce Rate',
			badgeTitle: 17,
			trending: 'positive',
			remarks: 'Strong user acquitision',
            format: 'percentage',
            icon: Waypoints
		}
	]


    return (
        <div className="dashboard-analytics-audience-and-devices">
            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                        <div className="page-top mb-2 lg:px-6">
                            <div className="page-top-title w-full flex flex-col gap-2">
                                <span className='text-[1.4rem] md:text-[1.5rem] text-foreground font-bold capitalize'>audience and devices</span>
                                <span className="border-l-[1.5px] border-l-primary pl-2 text-sm text-muted-foreground capitalize">
                                    Audience reach and multi-device activity. Visitor demographics, browser share, and device breakdown
                                </span>
                            </div>
                        </div>
                        <PeriodSelector getSelectedPeriod={setSelectedPeriod}/>
                        <section className="anlaytics-cards">
                            <div  className="grid grid-cols-1 gap-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
                                {
                                    KPICardData.map((cardData, _index) => (
                                        <KPICard key={_index} selectedPeriod={selectedPeriod} data={cardData}/>
                                    ))
                                }
                            </div>
                        </section>
                        <section className="audience-overview-chart lg:px-6">
                            <div  className="grid grid-cols-1 gap-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs @5xl/main:grid-cols-2 dark:*:data-[slot=card]:bg-card">
                                <AudienceOverviewChart/>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}