"use client"

import React from "react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup,
    SelectLabel, SelectItem
 } from '@/components/ui/select';

type Period = {
    id: string
    title: string
    value: string
    duration: string
}

const periods: Period[] = [
    {
        id:'1',
        title: 'last 7 days',
        value: '7',
        duration: 'week'
    },
    {
        id: '2',
        title: 'last 30 days',
        value: '30',
        duration: 'month'
    },
    {
        id: '3',
        title: 'last 3 months',
        value: '90',
        duration: 'quarter'
    },
    {
        id: '4',
        title: 'last 12 months',
        value: '365',
        duration: 'year'
    }
]

//Define period setter props interface
interface PeriodSetter {
    //setter function
    getSelectedPeriod: React.Dispatch<React.SetStateAction<Period>>;
}

export function PeriodSelector({getSelectedPeriod}: PeriodSetter) {
    //Define state for selected value
    const [selectedPeriod, setSelectedPeriod] = React.useState<Period>(periods[0]);

    //Set the default select value to setter props function
    React.useEffect(() => {
        getSelectedPeriod(selectedPeriod)
    });

    //Callback function to hanlde select input change for period
    const handlePeriodChange = (newValue: string) => {
        const period = periods.find((period) => period.value === newValue);
        if(period) {
            //For local scope
            setSelectedPeriod(period);
            //setter for props
            getSelectedPeriod(period);
        }
    }

    return (
        <div className="period-container w-full flex justify-end lg:px-6">
            <Select defaultValue={selectedPeriod.value} onValueChange={handlePeriodChange}>
                <SelectTrigger className="w-full sm:w-50 md:w-64">
                    <SelectValue/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Select a Period</SelectLabel>
                        {
                            periods.map((period) => (
                                <SelectItem key={period.id} value={period.value}>
                                    {period.title}
                                </SelectItem>
                            ))
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}