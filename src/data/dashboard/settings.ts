import {LucideIcon, SquareUser, Users, Mails} from "lucide-react"

interface Setting {
    title: string;
    url: string;
    isActive:boolean;
    icon: LucideIcon;
}

//Sample data for metrics
const settings: Setting[] = [
    {
        title: 'Profile',
        url: '#',
        isActive: false,
        icon: SquareUser,
    },
    {
        title: 'Users',
        url: '#',
        isActive: false,
        icon: Users,
    },
    {
        title: 'Messages',
        url: '#',
        isActive: false,
        icon: Mails,
    },
];

export default settings;