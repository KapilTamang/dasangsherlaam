import { type LucideIcon, Info, Send, Search } from 'lucide-react';

interface Navlink {
    id: number;
    title: string;
    slug: string;
    icon: LucideIcon
}

const navlinks: Navlink [] = [
    {
        id: 1,
        title: 'about',
        slug: 'about',
        icon: Info
    },
    {
        id: 2,
        title: 'contact',
        slug: 'contact',
        icon: Send
    },
    {
        id: 3,
        title: 'search',
        slug: 'search',
        icon: Search
    }
]

export default navlinks;