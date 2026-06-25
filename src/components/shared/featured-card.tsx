import Link from 'next/link';
import { CalendarClock, UserPen } from 'lucide-react';
import CategoryTag from './category-tag';


export default function FeaturedCard() {
    return (
        <Link href="/contact" className="group">
            <article className="card relative overflow-hidden">
                    {/* Card image */}
                    <div className="card-image">
                        <img
                            className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                            src="/images/featured.jpg"
                            alt="featured-image"
                        />
                    </div>
                    {/* Card text content */}
                    <div className="card-body flex flex-col gap-1 w-full md:absolute bottom-0 left-0 bg-primary md:bg-card-featured-background/70 md:group-hover:bg-card-featured-background/90 duration-500 text-card-featured-foreground p-4 md:p-6">
                        <div className="card-header">
                            <CategoryTag title="featured" />
                            <h1 className="capitalize text-[1.4rem] md:text-[2rem] font-bold group-hover:underline">Artifical intelligence and robotics</h1>
                        </div>
                        <div className="card-footer flex gap-8 mt-2 text-[1rem] md:text-[1.1rem]">
                            <div className="card-footer-date flex items-center gap-1">
                                <CalendarClock size={20}/>
                                June 6, 2026
                            </div>
                            <div className="card-footer-author flex items-center gap-1">
                                <UserPen size={20}/> Dasang
                            </div>
                        </div>
                    </div>
            </article>
        </Link>
    )
}