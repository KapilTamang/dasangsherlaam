import Link from 'next/link';
import { CalendarClock, UserPen } from 'lucide-react';
import CategoryTag from './category-tag';

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
    data: cardItem
}

export default function FeaturedCard({data}: cardItemProps) {
  
    return (
        <Link href="/contact" className="group">
            <article className="card relative overflow-hidden">
                    {/* Card image */}
                    <div className="card-image">
                        <img
                            className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                            src={data.imageURL}
                            alt={data.title || 'featured-image'}
                        />
                    </div>
                    {/* Card text content */}
                    <div className="card-body flex flex-col gap-1 md:gap-2 w-full md:absolute bottom-0 left-0 bg-primary md:bg-card-featured-background/70 md:group-hover:bg-card-featured-background/90 duration-500 text-card-featured-foreground p-4 md:p-6">
                        <div className="card-header flex flex-col gap-0 md:gap-2">
                            <CategoryTag title="featured" />
                            <h5 className="md:line-clamp-1 capitalize text-[1.4rem] md:text-[2rem] font-bold underline md:no-underline group-hover:underline">{data.title}</h5>
                        </div>
                        <div className="card-footer flex gap-8 mt-2 text-[1rem] md:text-[1.1rem]">
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