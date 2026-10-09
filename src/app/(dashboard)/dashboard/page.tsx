"use client"

import React from 'react'
import { KPICard} from "./_components/KPICard"
import { TrafficAudienceTrend } from "./_components/traffic-audience-trend.tsx"
import { PeriodSelector } from "./_components/period-selector"
import { ConversionFunnelChart } from './_components/conversion-funnel-chart'
import { TrafficSourceChart } from './_components/traffic-source-chart'
import { AudienceChart } from './_components/audience-chart'
import { UserEngagement } from './_components/user-engagement'
import { TopContentTable } from './_components/top-content-table'
 

export default function Dashboard() {
	//Set state for selected period
	const [selectedPeriod, setSelectedPeriod] = React.useState({
		id: "",
		title: "",
		value: "",
		duration: ""
	});

	const KPICardsData = [
		{
			title: '5.34K',
			description: 'Visitors',
			badgeTitle: 12.5,
			trending: 'positive',
			remarks: 'Visitors trending up'
		},
		{
			title: '32.345K',
			description: 'Page Views',
			badgeTitle: 20,
			trending: 'negative',
			remarks: 'Declining audience interests'
		},
		{
			title: '3.2K',
			description: 'Regitered',
			badgeTitle: 5.2,
			trending: 'positive',
			remarks: 'Decent increment on leads'
		},
		{
			title: '2.6K',
			description: 'Subscribed',
			badgeTitle: 17,
			trending: 'positive',
			remarks: 'Strong user acquitision'
		}
	]

    return(
		<div className="dashboard-home">
			<div className="flex flex-1 flex-col">
				<div className="@container/main flex flex-1 flex-col gap-2">
					<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
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
						<section className="traffic-audience-trend lg:px-6">
							<TrafficAudienceTrend/>
						</section>
						<section className="conversion-traffic-audience-cards grid grid-cols-1 @xl/main:grid-cols-2 @6xl/main:grid-cols-4 gap-4 lg:px-6 items-stretch">
							<ConversionFunnelChart selectedPeriod={selectedPeriod}/>
							<AudienceChart selectedPeriod={selectedPeriod}/>
							<TrafficSourceChart selectedPeriod={selectedPeriod}/>
							<UserEngagement selectedPeriod={selectedPeriod}/>
						</section>
						<section className="top-content-table flex flex-col gap-4 lg:px-6">
							<div className="font-medium">Top Content <span className='text-muted-foreground capitalize'>({selectedPeriod.title})</span></div>
							<TopContentTable/>
						</section>
					</div>
				</div>
			</div>
		</div>
    )
}