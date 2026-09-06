import {LucideIcon, PieChart} from "lucide-react"

interface Analytic {
    id: number,
    title: string;
    url: string;
    isActive:boolean;
    icon: LucideIcon;
    items: {
        id: number
        title: string;
        url: string;
    }[];
}

//Sample data for metrics
const analytics: Analytic[] = [
    {
        id: 1,
        title: 'Metrics',
        url: '#',
        isActive: false,
        icon: PieChart,
        items: [
            {
                id: 1,
                title: 'Reader Traffic',
                url: '#',
            },
            {
                id: 2,
                title: 'Performance',
                url: '#',
            },
            {
                id: 3,
                title: 'Traffic Sources',
                url: '#',
            },
            {
                id: 4,
                title: 'Audience & Devices',
                url: '#',
            },
            {
                id: 5,
                title: 'Growth & Engagement',
                url: ''
            }
        ],
    },
];

export default analytics;