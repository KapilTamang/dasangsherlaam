import {LucideIcon, SquareUser, Users, Mails} from "lucide-react"

interface Setting {
    id: number,
    title: string;
    url: string;
    isActive:boolean;
    icon: LucideIcon;
}

//Sample data for metrics
const settings: Setting[] = [
    {
        id: 1,
        title: 'Profile',
        url: '#',
        isActive: false,
        icon: SquareUser,
    },
    {
        id: 2,
        title: 'Users',
        url: '#',
        isActive: false,
        icon: Users,
    },
    {
        id: 3,
        title: 'Messages',
        url: '#',
        isActive: false,
        icon: Mails,
    },
];

export default settings;