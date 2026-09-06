import {LucideIcon, HatGlasses, Cookie, Handshake} from "lucide-react"

interface Page {
    id: number
    title: string;
    url: string;
    isActive:boolean;
    icon: LucideIcon;
}

//Sample data for metrics
const pages: Page[] = [
    {
        id: 1,
        title: 'Privacy Policy',
        url: '#',
        isActive: false,
        icon: HatGlasses,
    },
    {
        id: 2,
        title: 'Cookie Policy',
        url: '#',
        isActive: false,
        icon: Cookie,
    },
    {
        id: 3,
        title: 'Terms & Conditions',
        url: '#',
        isActive: false,
        icon: Handshake,
    },
];

export default pages;