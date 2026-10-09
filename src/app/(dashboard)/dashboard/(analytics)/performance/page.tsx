"use client"

import React from 'react';
import { PeriodSelector } from '../../_components/period-selector';
import { KPICard } from './_components/KPICard';
import { LCPChart } from './_components/LCP-chart';
import { INPChart } from './_components/INP-chart';
import { CLSChart } from './_components/CLS-chart';

export default function Performance() {
   //Set state for selected period
    const [selectedPeriod, setSelectedPeriod] = React.useState({
        id: "",
        title: "",
        value: "",
        duration: ""
    });

    const KPICardData = [
        {
            title: '1.75 s',
            description: 'Average Page Load',
            performance: 'positive',
            badgeTitle: 2.2,
            remarks: 'Overall good performance. Slight improvement',
            indicator: 'good'
        },
        {
            title: '2.1 s',
            description: 'LCP (Largest Contentful Paint)',
            performance: 'positive',
            badgeTitle: 2.3,
            remarks: 'Decent loading performance. Improving performance',
            indicator: 'good'
        },
        {
            title: '300 ms',
            description: 'INP (Interaction to Next Paint)',
            performance: 'negative',
            badgeTitle: 1.3,
            remarks: 'Need improvement for better performance, slight declination',
            indicator: 'moderate'
        },
        {
            title: '0.35',
            description: 'CLS (Cumulative Layout Shift)',
            performance: 'negative',
            badgeTitle: 0.3,
            remarks: 'Poor visual stability, need immediate attention!',
            indicator: 'poor'
        },
    ]
    return (
       <div className="dashboard-analytics-reader-traffic">
            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                        <PeriodSelector getSelectedPeriod={setSelectedPeriod}/>
                        <section className="kpi-cards-analytics">
                            <div  className="grid grid-cols-1 gap-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
                                {
                                    KPICardData.map((cardData, _index) => (
                                        <KPICard key={_index} data={cardData}/>
                                    ))
                                }
                            </div>
                        </section>
                        <section className="performance-trend-LCP-INP-CLS">
                             <div  className="grid grid-cols-1 gap-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-3 dark:*:data-[slot=card]:bg-card">
                                <LCPChart/>
                                <INPChart/>
                                <CLSChart/>
                             </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}