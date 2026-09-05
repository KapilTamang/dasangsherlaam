import {LucideIcon, HatGlasses, Cookie, Handshake} from "lucide-react"

interface Page {
    title: string;
    url: string;
    isActive:boolean;
    icon: LucideIcon;
}

//Sample data for metrics
const pages: Page[] = [
    {
        title: 'Privacy Policy',
        url: '#',
        isActive: false,
        icon: HatGlasses,
    },
    {
        title: 'Cookie Policy',
        url: '#',
        isActive: false,
        icon: Cookie,
    },
    {
        title: 'Terms & Conditions',
        url: '#',
        isActive: false,
        icon: Handshake,
    },
];

export default pages;