import {LucideIcon, BookOpen, LayoutGrid} from "lucide-react"

interface Content {
    id: number,
    title: string;
    url: string;
    isActive:boolean;
    icon: LucideIcon;
    items: {
        id: number,
        title: string;
        url: string;
    }[];
}

//Sample data for metrics
const contents: Content[] = [
    {
        id: 1,
        title: 'Posts',
        url: '#',
        isActive: false,
        icon: BookOpen,
        items: [
            {
                id:1,
                title: 'All Posts',
                url: '#',
            },
            {
                id: 2,
                title: 'Create New',
                url: '#',
            },
        ],
    },
    {
        id: 2,
        title: 'Categories',
        url: '#',
        isActive: false,
        icon: LayoutGrid,
        items: [
            {
                id: 1,
                title: 'All Categories',
                url: '#',
            },
            {
                id: 2,
                title: 'Create New',
                url: '#',
            },
        ],
    },
];

export default contents;