 interface Blog {
    id: number;
    title: string;
    slug: string;
    description: string;
    category: string;
    imageURL: string;
    date: string;
    author: string; 
}

const blogs: Blog[] = [
    {
        id: 1,
        title: 'artificial intelligence & robotics',
        slug: 'artificial-intelligence-&-robotics',
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
        author: 'Dasang'
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
        category: 'science & technology',
        imageURL: '/images/blog1.jpg',
        date: 'Aug 25, 2026',
        author: 'Dasang'
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
        author: 'Dasang'
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
        category: 'history & culture',
        imageURL: '/images/blog3.jpg',
        date: 'Aug 29, 2026',
        author: 'Dasang'
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
        category: 'travel & tourism',
        imageURL: '/images/blog4.jpg',
        date: 'Aug 30, 2026',
        author: 'Dasang'
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
        category: 'science & technology',
        imageURL: '/images/blog5.jpg',
        date: 'Sept 01, 2026',
        author: 'Dasang'
    },
    {
        id: 7,
        title: 'modern teaching methods in schools',
        slug: 'new-findings-in-modern-biomedica-reasearch',
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
        author: 'Dasang'
    },
    
];

export default blogs;