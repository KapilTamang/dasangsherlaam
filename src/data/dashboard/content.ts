import {LucideIcon, BookOpen, LayoutGrid} from "lucide-react"

interface Content {
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
const contents: Content[] = [
    {
        title: 'Posts',
        url: '#',
        isActive: false,
        icon: BookOpen,
        items: [
            {
                title: 'All Posts',
                url: '#',
            },
            {
                title: 'Create New',
                url: '#',
            },
        ],
    },
    {
        title: 'Categories',
        url: '#',
        isActive: false,
        icon: LayoutGrid,
        items: [
            {
                title: 'All Categories',
                url: '#',
            },
            {
                title: 'Create New',
                url: '#',
            },
        ],
    },
];

export default contents;