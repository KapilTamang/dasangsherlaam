interface Category {
    id: number;
    title: string;
    slug: string;
    description: string;
}

const categories: Category[] = [
    {
        id: 1,
        title: 'featured',
        slug: 'featured',
        description: 'Exciting articles from author.'
    },
    {
        id: 2,
        title: 'science & technology',
        slug: 'science-&-technology',
        description: 'Latest news and article on science and technology.'
    },
    {
        id: 3,
        title: 'amazing facts',
        slug: 'amazing-facts',
        description: 'Interesting and amazing facts on different topics.'
    },
    {
        id: 4,
        title: 'history & culture',
        slug: 'history-&-culture',
        description: 'Discover the rich history and culture of different countires and civilizations.'
    },
    {
        id: 5,
        title: 'travel & tourism',
        slug: 'travel-&-tourism',
        description: 'Explore the world through travel and tourism articles, guides and tips.'
    },
]

export default categories;
