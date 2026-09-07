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
        url: '/dashboard/privacy-policy',
        isActive: false,
        icon: HatGlasses,
    },
    {
        id: 2,
        title: 'Cookie Policy',
        url: '/dashboard/cookie-policy',
        isActive: false,
        icon: Cookie,
    },
    {
        id: 3,
        title: 'Terms & Conditions',
        url: '/dashboard/terms-and-conditions',
        isActive: false,
        icon: Handshake,
    },
];

export default pages;