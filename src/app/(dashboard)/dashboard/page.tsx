import { SectionCards } from "./_components/section-cards"
import { ChartAreaInteractive } from "./_components/chat-area-interactive"

export default function Dashboard() {
    return(
	<div className="dashboard-home">
		<div className="flex flex-1 flex-col">
			<div className="@container/main flex flex-1 flex-col gap-2">
				<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
					<SectionCards />
					<div className="grid grid-cols-4 gap-4 px-4 lg:px-6">
						<div className="col-span-3">
							<ChartAreaInteractive/>
						</div>
						<div className="col-span-1">
							<ChartAreaInteractive/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}