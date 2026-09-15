"use client"

import React from 'react'
import { SectionCards } from "./_components/section-cards"
import { ChartAreaInteractive } from "./_components/chat-area-interactive"
import { PeriodSelector } from "./_components/period-selector"


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
						<SectionCards selectedPeriod={selectedPeriod}/>
						<div className="lg:px-6">
							<ChartAreaInteractive/>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}