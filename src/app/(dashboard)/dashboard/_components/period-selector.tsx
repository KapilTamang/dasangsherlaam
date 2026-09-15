"use client"

import React from "react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup,
    SelectLabel, SelectItem
 } from '@/components/ui/select';

export function PeriodSelector() {
    //Define state for selected value
    const [selectedValue, setSelectedValue] = React.useState<string>('7');

    const periods = [
        {
            id: 1,
            title: 'last 7 days',
            value: '7'
        },
        {
            id: 2,
            title: 'last 30 days',
            value: '30'
        },
        {
            id: 3,
            title: 'last 90 days',
            value: '90'
        },
        {
            id: 4,
            title: 'last 12 months',
            value: '365'
        }
    ]

    //Callback function to hanlde select input change for period
    const handlePeriodChange = (newValue: string) => {
        setSelectedValue(newValue);
    }

    return (
        <div className="period-container w-full flex justify-end px-5">
            <Select defaultValue={selectedValue} onValueChange={handlePeriodChange}>
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