import Link  from 'next/link';
import { CalendarClock, UserPen } from 'lucide-react';
import CategoryTag from './category-tag';
import blogs from '@/data/blogs';

export default function ThumbnailCard() {
    const dummyBlogs = blogs;
    const trending = dummyBlogs.filter((blog) => blog.category !== 'featured').slice(0,6);
    return(
        <>
            {
                trending.map((blog, index) => (
                    <Link key={index} className="group pb-0 md:pb-4 md:border-b md:border-foreground/20" href={`/blog/${blog.slug}`}>
                        <article className="card flex gap-0 md:gap-3 overflow-hidden">
                            <div className="card-image bg-primary flex-1">
                                <img className="md:w-full md:h-full object-cover group-hover:scale-110 duration-500 ease-in-out" src={blog?.imageURL ?? ''} alt="thumbnail-image" />
                            </div>
                            <div className="card-body flex flex-2 md:flex-3 flex-col items-start gap-2 bg-primary md:bg-transparent text-card-featured-foreground md:text-card-thumbnail-foreground px-2 pb-2 md:p-0">
                                <div className="card-header text-xl font-bold">
                                    <div className="category-tag block md:hidden">
                                        <CategoryTag title={blog.category}/>
                                    </div>
                                    <h5 className="md:line-clamp-1 underline md:no-underline md:group-hover:underline text-[1.2rem] capitalize duration-300">
                                       {blog.title}
                                    </h5>
                                </div>
                                <div className="card-footer flex flex-col gap-1.5 md:text-muted-foreground text-[1rem]">
                                     <div className="card-footer-date">
                                        {blog.author}
                                    </div>
                                    <div className="card-footer-date">
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