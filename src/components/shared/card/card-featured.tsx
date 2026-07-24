import Link from 'next/link';
import Image from 'next/image';
import { CalendarClock, UserPen } from 'lucide-react';
import CategoryTag from '../category-tag';

interface cardItem {
    id: number;
    title: string;
    slug: string;
    description: string;
    category: string;
    imageURL: string;
    date: string;
    author: string; 
}

interface cardItemProps {
    data: cardItem;
}

export default function FeaturedCard({data}: cardItemProps) {
    return (
        <Link href={`/blog/${data.slug}`}>
            <article className="card group relative">
                    {/* Card image */}
                    <figure className="card-image overflow-hidden">
                        <Image
                            className="w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-110"
                            src={data.imageURL}
                            alt={data.title || 'featured-image'}
                            width={700}
                            height={600}
                            priority
                        />
                    </figure>
                    {/* Card text content */}
                    <div className="card-content flex flex-col gap-2 md:gap-2 w-full md:absolute bottom-0 left-0 bg-primary md:bg-card-featured-background/70 md:group-hover:bg-card-featured-background/90 duration-500 text-card-featured-foreground p-4 md:p-6">
                        <header className="card-header flex flex-col gap-0 md:gap-2">
                            <CategoryTag title="featured" />
                            <h1 className="md:line-clamp-1 capitalize text-[1.3rem] md:text-[2rem] font-bold underline md:no-underline group-hover:underline">{data.title}</h1>
                        </header>
                        <div className="card-footer flex gap-8 mt-2 text-[0.9rem] md:text-[1rem]">
                            <div className="card-footer-date flex items-center gap-1">
                                <CalendarClock size={20}/>
                                {data.date}
                            </div>
                            <div className="card-footer-author flex items-center gap-1">
                                <UserPen size={20}/> 
                                {data.author}
                            </div>
                        </div>
                    </div>
            </article>
        </Link>
    )
}