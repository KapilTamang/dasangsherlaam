import {LucideIcon, PieChart} from "lucide-react"

interface Analytic {
    title: string;
    url: string;
    isActive:boolean;
    icon: LucideIcon;
    items: {
        title: string;
        url: string;
    }[];
}

//Sample data for metrics
const analytics: Analytic[] = [
    {
        title: 'Metrics',
        url: '#',
        isActive: false,
        icon: PieChart,
        items: [
            {
                title: 'Reader Traffic',
                url: '#',
            },
            {
                title: 'Performance',
                url: '#',
            },
            {
                title: 'Traffic Sources',
                url: '#',
            },
            {
                title: 'Audience & Devices',
                url: '#',
            },
            {
                title: 'Growth & Engagement',
                url: ''
            }
        ],
    },
];

export default analytics;