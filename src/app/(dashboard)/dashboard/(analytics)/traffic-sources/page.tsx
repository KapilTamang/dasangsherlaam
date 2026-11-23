"use client"

import React from 'react';
import { PeriodSelector } from '../../_components/period-selector';

export default function TrafficSources() {
    //Set state for selected period
    const [selectedPeriod, setSelectedPeriod] = React.useState({
        id: "",
        title: "",
        value: "",
        duration: ""
    });

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
                                    <PeriodSelector getSelectedPeriod={setSelectedPeriod}/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}