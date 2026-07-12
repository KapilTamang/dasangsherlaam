import {type LucideIcon, Award, Atom, Lightbulb, History, Plane} from 'lucide-react';

interface Category {
    id: number;
    title: string;
    slug: string;
    abbreviation: string;
    description: string;
    icon: LucideIcon;
}

const categories: Category[] = [
    {
        id: 1,
        title: 'featured',
        slug: 'featured',
        abbreviation: 'feat',
        description: 'Exciting articles from author.',
        icon: Award
    },
    {
        id: 2,
        title: 'science & technology',
        slug: 'science-&-technology',
        abbreviation: 's&t',
        description: 'Latest news and article on science and technology.',
        icon: Atom
    },
    {
        id: 3,
        title: 'amazing facts',
        slug: 'amazing-facts',
        abbreviation: 'af',
        description: 'Interesting and amazing facts on different topics.',
        icon: Lightbulb
    },
    {
        id: 4,
        title: 'history & culture',
        slug: 'history-&-culture',
        abbreviation: 'h&c',
        description: 'Discover the rich history and culture of different countires and civilizations.',
        icon: History
    },
    {
        id: 5,
        title: 'travel & tourism',
        slug: 'travel-&-tourism',
        abbreviation: 't&t',
        description: 'Explore the world through travel and tourism articles, guides and tips.',
        icon: Plane
    },
]

export default categories;
