interface AuthorDetails {
    name: string;
    title: string;
    description: string;
    imageURL: string;
    facebookURL: string;
    instagramURL: string;
    linkedInURLL: string;
    xURL: string;
}

const Author: AuthorDetails = {
    name: 'dasang',
    title: 'content writer',
    description: `I loving writing contents. I've been blogging for past five years on different categories. Entertainig, awarness and educating people through digital platform has always been my priority. I have been putting on lots of effortinto research to present incredible contents for my readers.`,
    imageURL: '/images/author.jpg',
    facebookURL: 'https://www.facebook.com',
    instagramURL: 'https://www.instagram.com',
    linkedInURLL: 'https://www.linkedin.com',
    xURL: 'https://www.x.com'
}

export default Author