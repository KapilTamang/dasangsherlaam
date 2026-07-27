import {type LucideIcon, Award, Atom, Lightbulb, History, Plane, Crown} from 'lucide-react';

interface Category {
    id: number;
    title: string;
    slug: string;
    abbreviation: string;
    description: string;
    icon: LucideIcon;
    imageURL: string;
}

const categories: Category[] = [
    {
        id: 1,
        title: 'featured',
        slug: 'featured',
        abbreviation: 'ft',
        description: 'Exciting and latest articles by author from various fields.',
        icon: Award,
        imageURL: "/images/featured-category.png"
    },
    {
        id: 2,
        title: 'science and technology',
        slug: 'science-and-technology',
        abbreviation: 'st',
        description: 'Latest news and article on science and technology. It covers latest technologies, innovations and trends in science and technology sector around the world.',
        icon: Atom,
        imageURL: "/images/science-and-technology-category.png"
    },
    {
        id: 3,
        title: 'amazing facts',
        slug: 'amazing-facts',
        abbreviation: 'af',
        description: 'Interesting and amazing facts on different topics. It covers undiscoverd facts to readers to entertain and provide general knowledge.',
        icon: Lightbulb,
        imageURL: "/images/amazing-facts-category.png"
    },
    {
        id: 4,
        title: 'history and culture',
        slug: 'history-and-culture',
        abbreviation: 'hc',
        description: 'Discover the rich history and culture of different countires and civilizations. Get ready to unfold amazing history and cultures around the globe.',
        icon: History,
        imageURL: "/images/history-and-culture-category.png"
    },
    {
        id: 5,
        title: 'travel and tourism',
        slug: 'travel-and-tourism',
        abbreviation: 'tt',
        description: 'Explore the world through travel and tourism articles. The articles will provide guides and tips for exploring beautiful places around the world.',
        icon: Plane,
        imageURL: "/images/travel-and-tourism-category.png"
    },
    {
        id: 6,
        title: 'exclusive',
        slug: 'exclusive',
        abbreviation: 'ex',
        description: 'Discover specialized tailored content in this section. It covers articles from varous topics.',
        icon: Crown,
        imageURL: "/images/exclusive-category.png"
    },
]

export default categories;
