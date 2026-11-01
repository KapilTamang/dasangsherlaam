 interface Blog {
    id: number;
    title: string;
    slug: string;
    description: string;
    category: string;
    imageURL: string;
    date: Date;
    author: string; 
    views: number;
    visitors: number;
    shares: number;
    likes: number;
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
        date: new Date("2025-06-21"),
        author: 'Dasang',
        views: 10200,
        visitors: 9500,
        shares: 1200,
        likes: 5400
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
        date: new Date("2025-06-26"),
        author: 'Dasang',
        views: 9700,
        visitors: 7500,
        shares: 1200,
        likes: 4400
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
        date: new Date("2025-07-02"),
        author: 'Dasang',
        views: 8700,
        visitors: 3500,
        shares: 1100,
        likes: 4100
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
        date: new Date("2025-07-10"),
        author: 'Dasang',
        views: 7300,
        visitors: 4500,
        shares: 900,
        likes: 3600
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
        date: new Date("2025-07-29"),
        author: 'Dasang',
        views: 6300,
        visitors: 6500,
        shares: 650,
        likes: 3400
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
        date: new Date("2025-08-01"),
        author: 'Dasang',
        views: 6100,
        visitors: 5400,
        shares: 1650,
        likes: 5400
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
        date: new Date("2025-08-13"),
        author: 'Dasang',
        views: 6100,
        visitors: 5400,
        shares: 1650,
        likes: 5400
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
        date: new Date("2025-08-25"),
        author: 'Dasang',
        views: 6100,
        visitors: 5400,
        shares: 1600,
        likes: 5400
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
        date: new Date("2025-09-04"),
        author: 'Dasang',
        views: 6100,
        visitors: 5400,
        shares: 1650,
        likes: 5400
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
        date: new Date("2025-09-13"),
        author: 'Dasang',
        views: 6100,
        visitors: 5400,
        shares:  1650,
        likes: 5400
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
        date: new Date("2026-01-15"),
        author: 'Dasang',
        views: 6100,
        visitors: 5400,
        shares: 1650,
        likes: 5400
    },
    
];

export default blogs;
