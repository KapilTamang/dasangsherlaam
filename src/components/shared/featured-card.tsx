import Link from 'next/link';
import { CalendarClock, UserPen } from 'lucide-react';
import CategoryTag from './category-tag';
import blogs from '@/data/blogs'


export default function FeaturedCard() {
    const dummyBlogs = blogs;
    const featured = dummyBlogs.find((blog) => blog.category == 'featured')
    if (!featured) return null
    return (
        <Link href="/contact" className="group">
            <article className="card relative overflow-hidden">
                    {/* Card image */}
                    <div className="card-image">
                        <img
                            className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                            src={featured.imageURL}
                            alt={featured.title || 'featured-image'}
                        />
                    </div>
                    {/* Card text content */}
                    <div className="card-body flex flex-col gap-1 w-full md:absolute bottom-0 left-0 bg-primary md:bg-card-featured-background/70 md:group-hover:bg-card-featured-background/90 duration-500 text-card-featured-foreground p-4 md:p-6">
                        <div className="card-header">
                            <CategoryTag title="featured" />
                            <h1 className="capitalize text-[1.4rem] md:text-[2rem] font-bold group-hover:underline">{featured.title}</h1>
                        </div>
                        <div className="card-footer flex gap-8 mt-2 text-[1rem] md:text-[1.1rem]">
                            <div className="card-footer-date flex items-center gap-1">
                                <CalendarClock size={20}/>
                                {featured.date}
                            </div>
                            <div className="card-footer-author flex items-center gap-1">
                                <UserPen size={20}/> 
                                {featured.author}
                            </div>
                        </div>
                    </div>
            </article>
        </Link>
    )
}