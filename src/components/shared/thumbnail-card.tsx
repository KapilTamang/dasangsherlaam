import Link  from 'next/link';
import { CalendarClock, UserPen } from 'lucide-react';
import CategoryTag from './category-tag';
import blogs from '@/data/blogs';

export default function ThumbnailCard() {
    const dummyBlogs = blogs;
    const trending = dummyBlogs.filter((blog) => blog.category !== 'featured');
    return(
        <>
            {
                trending.map((blog, index) => (
                    <Link key={index} className="group pb-4 md:border-b md:border-foreground/20" href="/">
                        <article className="card flex flex-col md:flex-row gap-0 md:gap-3 overflow-hidden">
                            <div className="card-image flex-1 shrink-0">
                                <img className="w-full h-full object-cover group-hover:scale-110 duration-500 ease-in-out" src={blog?.imageURL ?? ''} alt="thumbnail-image" />
                            </div>
                            <div className="card-body flex flex-1 md:flex-3 flex-col items-start gap-2 bg-primary md:bg-transparent text-card-featured-foreground md:text-card-thumbnail-foreground p-4 md:p-0">
                                <div className="card-header text-xl font-bold">
                                    <div className="category-tag block md:hidden">
                                            <CategoryTag title="Sciene & Technology"/>
                                    </div>
                                    <h5 className="group-hover:underline text-[1.4rem] md:text-[1.2rem] lg::text-[1.5rem] capitalize">
                                       {blog.title}
                                    </h5>
                                </div>
                                <div className="card-footer flex flex-col gap-4 md:text-muted-foreground text-[1rem]">
                                    <div className="card-footer-date flex items-center gap-1">
                                        <CalendarClock size={18}/>
                                        {blog.date}
                                    </div>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))
            }
        </>
       
    )
}