"use client"

import React from 'react';
import { KPICard } from '../../_components/KPICard';
import { PeriodSelector } from '../../_components/period-selector';
import { UserRoundGroup, Search, Link, Share2 } from 'lucide-react';
import { TrafficSourcesTrendChart } from './_components/traffic-sources-trend-chart';
import { TrafficSourceChart } from '../../_components/traffic-source-chart';
import { TrafficChannelPerformance } from './_components/traffic-channel-performance';
import { TopReferralWebsites } from './_components/top-referral-websites';

export default function TrafficSources() {
    //Set state for selected period
    const [selectedPeriod, setSelectedPeriod] = React.useState({
        id: "",
        title: "",
        value: "",
        duration: ""
    });

    const KPICardsData = [
		{
			title: 53400,
			description: 'Total Visitors',
			badgeTitle: 12.5,
			trending: 'positive',
			remarks: 'Visitors trending up',
            format: 'count',
            icon: UserRoundGroup
		},
		{
			title: 30345,
			description: 'Organic Traffic',
			badgeTitle: 10,
			trending: 'negative',
			remarks: 'Organic visitors declining',
            format: 'count',
            icon: Search
		},
		{
			title: 15300,
			description: 'Referral Traffic',
			badgeTitle: 5.2,
			trending: 'positive',
			remarks: 'Referral visitors trending up',
            format: 'count',
            icon: Link
		},
		{
			title: 18340,
			description: 'Social Traffic',
			badgeTitle: 17,
			trending: 'positive',
			remarks: 'Strong traffic from social channles',
            format: 'count',
            icon: Share2
		}
	]

    return (
        <div className="dashboard-analytics-traffic-sources">
            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                        <div className="page-top mb-2 lg:px-6">
                            <div className="page-top-title w-full flex flex-col gap-2">
                                <span className='text-[1.4rem] md:text-[1.5rem] text-foreground font-bold capitalize'>traffic sources</span>
                                <span className="border-l-[1.5px] border-l-primary pl-2 text-sm text-muted-foreground capitalize">
                                    where your visitors come from and how traffic channels are performing
                                </span>
                            </div>
                        </div>
                        <PeriodSelector getSelectedPeriod={setSelectedPeriod}/>
                        <section className="anlaytics-cards">
                            <div  className="grid grid-cols-1 gap-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
                                {
                                KPICardsData.map((cardData, _index) => (
                                    <KPICard key={_index} selectedPeriod={selectedPeriod} data={cardData}/>
                                ))
                            }
                            </div>
                        </section>
                        <section className="traffic-sources-trend-chart lg:px-6">
                            <TrafficSourcesTrendChart/>
                        </section>
                         <section className="traffic-source-performance">
                            <div  className="grid grid-cols-1 gap-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-3 dark:*:data-[slot=card]:bg-card">
                                <TrafficSourceChart selectedPeriod={selectedPeriod}/>
                                <TrafficChannelPerformance selectedPeriod={selectedPeriod}/>
                                <TopReferralWebsites selectedPeriod={selectedPeriod}/>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}