"use client"

import React from 'react'
import { SectionCards } from "./_components/section-cards"
import { ChartAreaInteractive } from "./_components/chat-area-interactive"
import { PeriodSelector } from "./_components/period-selector"
import { ConversionFunnelChart } from './_components/conversion-funnel-chart'
import { TrafficSourceChart } from './_components/traffic-source-chart'
import { AudienceChart } from './_components/audience-chart'
 

export default function Dashboard() {
	//Set state for selected period
	const [selectedPeriod, setSelectedPeriod] = React.useState({
		id: "",
		title: "",
		value: "",
		duration: ""
	});

    return(
		<div className="dashboard-home">
			<div className="flex flex-1 flex-col">
				<div className="@container/main flex flex-1 flex-col gap-2">
					<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
						<PeriodSelector getSelectedPeriod={setSelectedPeriod}/>
						<section className="anlaytics-cards flex flex-col gap-4 md:gap-6">
							<SectionCards selectedPeriod={selectedPeriod}/>
						</section>
						<section className="traffic-audience-trend lg:px-6">
							<ChartAreaInteractive/>
						</section>
						<section className="conversion-traffic-audience-cards grid grid-cols-4 gap-4 lg:px-6 items-stretch">
							<ConversionFunnelChart selectedPeriod={selectedPeriod}/>
							<AudienceChart selectedPeriod={selectedPeriod}/>
							<AudienceChart selectedPeriod={selectedPeriod}/>
							<TrafficSourceChart/>
						</section>
					</div>
				</div>
			</div>
		</div>
    )
}