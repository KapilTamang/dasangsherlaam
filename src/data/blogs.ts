 interface Blog {
    id: number;
    title: string;
    slug: string;
    description: string;
    category: string;
    imageURL: string;
    date: string;
    author: string; 
    views: string;
    visitors: string;
    shares: string;
    likes: string;
}   

const blogs: Blog[] = [
    {
        id: 1,
        title: 'artificial intelligence and robotics',
        slug: 'artificial-intelligence-and-robotics',
        description: `An obsessive compulsion can be traced through our culture: to run down human beings, talk us down from the traditional idea
        that we occupy a special place in the cosmos, cared for and anticipated by an intelligence beyond ours. The compulsion takes various forms. 
        It includesthe denial of our biological design, and of cosmological design. It includes the moral and legal equation of nonhumans 
        animals with humans, and more. It paints an ugly, yet somehow powerfully seductive, materialist picture of men and women as unexceptional accidents of evolution.
        An obsessive compulsion can be traced through our culture: to run down human beings, talk us down from the traditional idea
        that we occupy a special place in the cosmos, cared for and anticipated by an intelligence beyond ours. The compulsion takes various forms. 
        It includesthe denial of our biological design, and of cosmological design. It includes the moral and legal equation of nonhumans 
        animals with humans, and more. It paints an ugly, yet somehow powerfully seductive, materialist picture of men and women as unexceptional accidents of evolution.`,
        category: 'featured',
        imageURL: '/images/featured.jpg',
        date: 'Aug 12, 2026',
        author: 'Dasang',
        views: '10.2K',
        visitors: '9.5K',
        shares: '1.2K',
        likes: '5.4K'
    },
    {
        id: 2,
        title: 'AI assistant for modern innovations',
        slug: 'AI-assistant-for-modern-innovations',
        description: `An obsessive compulsion can be traced through our culture: to run down human beings, talk us down from the traditional idea
        that we occupy a special place in the cosmos, cared for and anticipated by an intelligence beyond ours. The compulsion takes various forms. 
        It includesthe denial of our biological design, and of cosmological design. It includes the moral and legal equation of nonhumans 
        animals with humans, and more. It paints an ugly, yet somehow powerfully seductive, materialist picture of men and women as unexceptional accidents of evolution.
        An obsessive compulsion can be traced through our culture: to run down human beings, talk us down from the traditional idea
        that we occupy a special place in the cosmos, cared for and anticipated by an intelligence beyond ours. The compulsion takes various forms. 
        It includesthe denial of our biological design, and of cosmological design. It includes the moral and legal equation of nonhumans 
        animals with humans, and more. It paints an ugly, yet somehow powerfully seductive, materialist picture of men and women as unexceptional accidents of evolution.`,
        category: 'science and technology',
        imageURL: '/images/blog1.jpg',
        date: 'Aug 25, 2026',
        author: 'Dasang',
        views: '9.7K',
        visitors: '7.5K',
        shares: '1.2K',
        likes: '4.4K'
    },
    {
        id: 3,
        title: 'think smartly in modern era',
        slug: 'think-smartly-in-modern-era',
        description: `An obsessive compulsion can be traced through our culture: to run down human beings, talk us down from the traditional idea
        that we occupy a special place in the cosmos, cared for and anticipated by an intelligence beyond ours. The compulsion takes various forms. 
        It includesthe denial of our biological design, and of cosmological design. It includes the moral and legal equation of nonhumans 
        animals with humans, and more. It paints an ugly, yet somehow powerfully seductive, materialist picture of men and women as unexceptional accidents of evolution.
        An obsessive compulsion can be traced through our culture: to run down human beings, talk us down from the traditional idea
        that we occupy a special place in the cosmos, cared for and anticipated by an intelligence beyond ours. The compulsion takes various forms. 
        It includesthe denial of our biological design, and of cosmological design. It includes the moral and legal equation of nonhumans 
        animals with humans, and more. It paints an ugly, yet somehow powerfully seductive, materialist picture of men and women as unexceptional accidents of evolution.`,
        category: 'amazing facts',
        imageURL: '/images/blog2.jpg',
        date: 'Aug 26, 2026',
        author: 'Dasang',
        views: '8.7K',
        visitors: '3.5K',
        shares: '1.1K',
        likes: '4.1K'
    },
    {
        id: 4,
        title: 'marketing analysis with AI tools',
        slug: 'marketing-analysis-with-AI-tools',
        description: `An obsessive compulsion can be traced through our culture: to run down human beings, talk us down from the traditional idea
        that we occupy a special place in the cosmos, cared for and anticipated by an intelligence beyond ours. The compulsion takes various forms. 
        It includesthe denial of our biological design, and of cosmological design. It includes the moral and legal equation of nonhumans 
        animals with humans, and more. It paints an ugly, yet somehow powerfully seductive, materialist picture of men and women as unexceptional accidents of evolution.
        An obsessive compulsion can be traced through our culture: to run down human beings, talk us down from the traditional idea
        that we occupy a special place in the cosmos, cared for and anticipated by an intelligence beyond ours. The compulsion takes various forms. 
        It includesthe denial of our biological design, and of cosmological design. It includes the moral and legal equation of nonhumans 
        animals with humans, and more. It paints an ugly, yet somehow powerfully seductive, materialist picture of men and women as unexceptional accidents of evolution.`,
        category: 'science and technology',
        imageURL: '/images/blog3.jpg',
        date: 'Aug 29, 2026',
        author: 'Dasang',
        views: '7.3K',
        visitors: '4.5K',
        shares: '0.9K',
        likes: '3.6K'
    },
    {
        id: 5,
        title: 'hospitality in luxuty-hotels',
        slug: 'hospitality-in-luxury-hotels',
        description: `An obsessive compulsion can be traced through our culture: to run down human beings, talk us down from the traditional idea
        that we occupy a special place in the cosmos, cared for and anticipated by an intelligence beyond ours. The compulsion takes various forms. 
        It includesthe denial of our biological design, and of cosmological design. It includes the moral and legal equation of nonhumans 
        animals with humans, and more. It paints an ugly, yet somehow powerfully seductive, materialist picture of men and women as unexceptional accidents of evolution.
        An obsessive compulsion can be traced through our culture: to run down human beings, talk us down from the traditional idea
        that we occupy a special place in the cosmos, cared for and anticipated by an intelligence beyond ours. The compulsion takes various forms. 
        It includesthe denial of our biological design, and of cosmological design. It includes the moral and legal equation of nonhumans 
        animals with humans, and more. It paints an ugly, yet somehow powerfully seductive, materialist picture of men and women as unexceptional accidents of evolution.`,
        category: 'travel and tourism',
        imageURL: '/images/blog4.jpg',
        date: 'Aug 30, 2026',
        author: 'Dasang',
        views: '6.3K',
        visitors: '6.5K',
        shares: '0.65K',
        likes: '3.4K'
    },
    {
        id: 6,
        title: 'new findings in modern biomedical research',
        slug: 'new-findings-in-modern-biomedica-reasearch',
        description: `An obsessive compulsion can be traced through our culture: to run down human beings, talk us down from the traditional idea
        that we occupy a special place in the cosmos, cared for and anticipated by an intelligence beyond ours. The compulsion takes various forms. 
        It includesthe denial of our biological design, and of cosmological design. It includes the moral and legal equation of nonhumans 
        animals with humans, and more. It paints an ugly, yet somehow powerfully seductive, materialist picture of men and women as unexceptional accidents of evolution.
        An obsessive compulsion can be traced through our culture: to run down human beings, talk us down from the traditional idea
        that we occupy a special place in the cosmos, cared for and anticipated by an intelligence beyond ours. The compulsion takes various forms. 
        It includesthe denial of our biological design, and of cosmological design. It includes the moral and legal equation of nonhumans 
        animals with humans, and more. It paints an ugly, yet somehow powerfully seductive, materialist picture of men and women as unexceptional accidents of evolution.`,
        category: 'science and technology',
        imageURL: '/images/blog5.jpg',
        date: 'Sept 01, 2026',
        author: 'Dasang',
        views: '6.1K',
        visitors: '5.4K',
        shares: '1.65K',
        likes: '5.4K'
    },
    {
        id: 7,
        title: 'modern teaching methods in schools',
        slug: 'modern-teaching-methods-in-schools',
        description: `An obsessive compulsion can be traced through our culture: to run down human beings, talk us down from the traditional idea
        that we occupy a special place in the cosmos, cared for and anticipated by an intelligence beyond ours. The compulsion takes various forms. 
        It includesthe denial of our biological design, and of cosmological design. It includes the moral and legal equation of nonhumans 
        animals with humans, and more. It paints an ugly, yet somehow powerfully seductive, materialist picture of men and women as unexceptional accidents of evolution.
        An obsessive compulsion can be traced through our culture: to run down human beings, talk us down from the traditional idea
        that we occupy a special place in the cosmos, cared for and anticipated by an intelligence beyond ours. The compulsion takes various forms. 
        It includesthe denial of our biological design, and of cosmological design. It includes the moral and legal equation of nonhumans 
        animals with humans, and more. It paints an ugly, yet somehow powerfully seductive, materialist picture of men and women as unexceptional accidents of evolution.`,
        category: 'amazing facts',
        imageURL: '/images/blog6.jpg',
        date: 'Sept 05, 2026',
        author: 'Dasang',
        views: '6.1K',
        visitors: '5.4K',
        shares: '1.65K',
        likes: '5.4K'
    },
    {
        id: 8,
        title: 'mapping our cosmic neighborhood: a deep dive into the milky way',
        slug: 'mapping-our-cosmic-neighborhood-a-deep-dive-into-the-milky-way',
        description: `An obsessive compulsion can be traced through our culture: to run down human beings, talk us down from the traditional idea
        that we occupy a special place in the cosmos, cared for and anticipated by an intelligence beyond ours. The compulsion takes various forms. 
        It includesthe denial of our biological design, and of cosmological design. It includes the moral and legal equation of nonhumans 
        animals with humans, and more. It paints an ugly, yet somehow powerfully seductive, materialist picture of men and women as unexceptional accidents of evolution.
        An obsessive compulsion can be traced through our culture: to run down human beings, talk us down from the traditional idea
        that we occupy a special place in the cosmos, cared for and anticipated by an intelligence beyond ours. The compulsion takes various forms. 
        It includesthe denial of our biological design, and of cosmological design. It includes the moral and legal equation of nonhumans 
        animals with humans, and more. It paints an ugly, yet somehow powerfully seductive, materialist picture of men and women as unexceptional accidents of evolution.`,
        category: 'exclusive',
        imageURL: '/images/exclusive.jpg',
        date: 'Sept 05, 2026',
        author: 'Dasang',
        views: '6.1K',
        visitors: '5.4K',
        shares: '1.65K',
        likes: '5.4K'
    },
    {
        id: 9,
        title: 'Rocket Lab Spends $8 Billion to Acquire Iridium to Accelerate Vertical Integration',
        slug: 'rocket-lab-spends-8-billion-to-acquire-iridium-to-accelerate-vertical-integration',
        description: `An obsessive compulsion can be traced through our culture: to run down human beings, talk us down from the traditional idea
        that we occupy a special place in the cosmos, cared for and anticipated by an intelligence beyond ours. The compulsion takes various forms. 
        It includesthe denial of our biological design, and of cosmological design. It includes the moral and legal equation of nonhumans 
        animals with humans, and more. It paints an ugly, yet somehow powerfully seductive, materialist picture of men and women as unexceptional accidents of evolution.
        An obsessive compulsion can be traced through our culture: to run down human beings, talk us down from the traditional idea
        that we occupy a special place in the cosmos, cared for and anticipated by an intelligence beyond ours. The compulsion takes various forms. 
        It includesthe denial of our biological design, and of cosmological design. It includes the moral and legal equation of nonhumans 
        animals with humans, and more. It paints an ugly, yet somehow powerfully seductive, materialist picture of men and women as unexceptional accidents of evolution.`,
        category: 'exclusive',
        imageURL: '/images/exclusive1.jpg',
        date: 'Oct 05, 2026',
        author: 'Dasang',
        views: '6.1K',
        visitors: '5.4K',
        shares: '1.65K',
        likes: '5.4K'
    },
    {
        id: 10,
        title: 'Lionel Messi Ranked No. 2, Cristiano Ronaldo Falls to 79th in FIFA World Cup 2026 Power Rankings',
        slug: 'Lionel-Messi-Ranked-No-2-Cristiano-Ronaldo-Falls-to-79th-in-FIFA-World-Cup-2026-Power-Rankings',
        description: `An obsessive compulsion can be traced through our culture: to run down human beings, talk us down from the traditional idea
        that we occupy a special place in the cosmos, cared for and anticipated by an intelligence beyond ours. The compulsion takes various forms. 
        It includesthe denial of our biological design, and of cosmological design. It includes the moral and legal equation of nonhumans 
        animals with humans, and more. It paints an ugly, yet somehow powerfully seductive, materialist picture of men and women as unexceptional accidents of evolution.
        An obsessive compulsion can be traced through our culture: to run down human beings, talk us down from the traditional idea
        that we occupy a special place in the cosmos, cared for and anticipated by an intelligence beyond ours. The compulsion takes various forms. 
        It includesthe denial of our biological design, and of cosmological design. It includes the moral and legal equation of nonhumans 
        animals with humans, and more. It paints an ugly, yet somehow powerfully seductive, materialist picture of men and women as unexceptional accidents of evolution.`,
        category: 'exclusive',
        imageURL: '/images/exclusive2.jpg',
        date: 'Jan 05, 2025',
        author: 'Dasang',
        views: '6.1K',
        visitors: '5.4K',
        shares: '1.65K',
        likes: '5.4K'
    },
    {
        id: 11,
        title: 'The Future of Medical Technology: Transforming Healthcare Delivery',
        slug: 'The-Future-of-Medical-Technology-Transforming-Healthcare-Delivery',
        description: `An obsessive compulsion can be traced through our culture: to run down human beings, talk us down from the traditional idea
        that we occupy a special place in the cosmos, cared for and anticipated by an intelligence beyond ours. The compulsion takes various forms. 
        It includesthe denial of our biological design, and of cosmological design. It includes the moral and legal equation of nonhumans 
        animals with humans, and more. It paints an ugly, yet somehow powerfully seductive, materialist picture of men and women as unexceptional accidents of evolution.
        An obsessive compulsion can be traced through our culture: to run down human beings, talk us down from the traditional idea
        that we occupy a special place in the cosmos, cared for and anticipated by an intelligence beyond ours. The compulsion takes various forms. 
        It includesthe denial of our biological design, and of cosmological design. It includes the moral and legal equation of nonhumans 
        animals with humans, and more. It paints an ugly, yet somehow powerfully seductive, materialist picture of men and women as unexceptional accidents of evolution.`,
        category: 'exclusive',
        imageURL: '/images/exclusive3.jpg',
        date: 'Aug 05, 2025',
        author: 'Dasang',
        views: '6.1K',
        visitors: '5.4K',
        shares: '1.65K',
        likes: '5.4K'
    },
    
];

export default blogs;
