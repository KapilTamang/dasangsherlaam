import Link  from 'next/link';
import { CalendarClock, UserPen } from 'lucide-react';
import CategoryTag from './category-tag';

export default function ThumbnailCard() {
    return(
        <>
            <Link className="group pb-4 md:border-b md:border-foreground/20" href="/">
                <article className="card flex flex-col md:flex-row gap-0 md:gap-3 overflow-hidden">
                    <div className="card-image flex-1 shrink-0">
                        <img className="w-full h-full object-cover group-hover:scale-110 duration-500 ease-in-out" src="/images/blog1.jpg" alt="thumbnail-image" />
                    </div>
                    <div className="card-body flex flex-1 md:flex-3 flex-col items-start gap-2 bg-primary md:bg-transparent text-card-featured-foreground md:text-card-thumbnail-foreground p-4 md:p-0">
                        <div className="card-header text-xl font-bold">
                            <div className="category-tag block md:hidden">
                                    <CategoryTag title="Sciene & Technology"/>
                            </div>
                            <h5 className="group-hover:underline text-[1.4rem] md:text-[1.2rem] lg::text-[1.5rem] capitalize">
                                Artifical Intelligence & robotics
                            </h5>
                        </div>
                        <div className="card-footer flex flex-col gap-4 md:text-muted-foreground text-[1rem]">
                            <div className="card-footer-date flex items-center gap-1">
                                <CalendarClock size={18}/>
                                June 6, 2026
                             </div>
                        </div>
                    </div>
                </article>
            </Link>
            <Link className="group pb-4 md:border-b md:border-foreground/20" href="/">
                <article className="card flex flex-col md:flex-row gap-0 md:gap-3 overflow-hidden">
                    <div className="card-image flex-1 shrink-0">
                        <img className="w-full h-full object-cover group-hover:scale-110 duration-500 ease-in-out" src="/images/blog2.jpg" alt="thumbnail-image" />
                    </div>
                    <div className="card-body flex flex-1 md:flex-3 flex-col items-start gap-2 bg-primary md:bg-transparent text-card-featured-foreground md:text-card-thumbnail-foreground p-4 md:p-0">
                        <div className="card-header text-xl font-bold">
                            <div className="category-tag block md:hidden">
                                    <CategoryTag title="Sciene & Technology"/>
                            </div>
                            <h5 className="group-hover:underline text-[1.4rem] md:text-[1.2rem] lg::text-[1.5rem] capitalize">
                               thinking smartley in modern era
                            </h5>
                        </div>
                        <div className="card-footer flex flex-col gap-4 md:text-muted-foreground text-[1rem]">
                            <div className="card-footer-date flex items-center gap-1">
                                <CalendarClock size={18}/>
                                June 6, 2026
                             </div>
                        </div>
                    </div>
                </article>
            </Link>
            <Link className="group pb-4 md:border-b md:border-foreground/20" href="/">
                <article className="card flex flex-col md:flex-row gap-0 md:gap-3 overflow-hidden">
                    <div className="card-image flex-1 shrink-0">
                        <img className="w-full h-full object-cover group-hover:scale-110 duration-500 ease-in-out" src="/images/blog3.jpg" alt="thumbnail-image" />
                    </div>
                    <div className="card-body flex flex-1 md:flex-3 flex-col items-start gap-2 bg-primary md:bg-transparent text-card-featured-foreground md:text-card-thumbnail-foreground p-4 md:p-0">
                        <div className="card-header text-xl font-bold">
                            <div className="category-tag block md:hidden">
                                    <CategoryTag title="Sciene & Technology"/>
                            </div>
                            <h5 className="group-hover:underline text-[1.4rem] md:text-[1.2rem] lg::text-[1.5rem] capitalize">
                                marketing analysis with AI tools
                            </h5>
                        </div>
                        <div className="card-footer flex flex-col gap-4 md:text-muted-foreground text-[1rem]">
                            <div className="card-footer-date flex items-center gap-1">
                                <CalendarClock size={18}/>
                                June 6, 2026
                             </div>
                        </div>
                    </div>
                </article>
            </Link>
            <Link className="group pb-4 md:border-b md:border-foreground/20" href="/">
                <article className="card flex flex-col md:flex-row gap-0 md:gap-3 overflow-hidden">
                    <div className="card-image flex-1 shrink-0">
                        <img className="w-full h-full object-cover group-hover:scale-110 duration-500 ease-in-out" src="/images/blog4.jpg" alt="thumbnail-image" />
                    </div>
                    <div className="card-body flex flex-1 md:flex-3 flex-col items-start gap-2 bg-primary md:bg-transparent text-card-featured-foreground md:text-card-thumbnail-foreground p-4 md:p-0">
                        <div className="card-header text-xl font-bold">
                            <div className="category-tag block md:hidden">
                                    <CategoryTag title="Sciene & Technology"/>
                            </div>
                            <h5 className="group-hover:underline text-[1.4rem] md:text-[1.2rem] lg::text-[1.5rem] capitalize">
                                hospitality in luxury hotels
                            </h5>
                        </div>
                        <div className="card-footer flex flex-col gap-4 md:text-muted-foreground text-[1rem]">
                            <div className="card-footer-date flex items-center gap-1">
                                <CalendarClock size={18}/>
                                June 6, 2026
                             </div>
                        </div>
                    </div>
                </article>
            </Link>
            <Link className="group pb-4 md:border-b md:border-foreground/20" href="/">
                <article className="card flex flex-col md:flex-row gap-0 md:gap-3 overflow-hidden">
                    <div className="card-image flex-1 shrink-0">
                        <img className="w-full h-full object-cover group-hover:scale-110 duration-500 ease-in-out" src="/images/blog5.jpg" alt="thumbnail-image" />
                    </div>
                    <div className="card-body flex flex-1 md:flex-3 flex-col items-start gap-2 bg-primary md:bg-transparent text-card-featured-foreground md:text-card-thumbnail-foreground p-4 md:p-0">
                        <div className="card-header text-xl font-bold">
                            <div className="category-tag block md:hidden">
                                    <CategoryTag title="Sciene & Technology"/>
                            </div>
                            <h5 className="group-hover:underline text-[1.4rem] md:text-[1.2rem] lg::text-[1.5rem] capitalize">
                                new findings in modern biomedical research
                            </h5>
                        </div>
                        <div className="card-footer flex flex-col gap-4 md:text-muted-foreground text-[1rem]">
                            <div className="card-footer-date flex items-center gap-1">
                                <CalendarClock size={18}/>
                                June 6, 2026
                             </div>
                        </div>
                    </div>
                </article>
            </Link>
            <Link className="group pb-4 md:border-b md:border-foreground/20" href="/">
                <article className="card flex flex-col md:flex-row gap-0 md:gap-3 overflow-hidden">
                    <div className="card-image flex-1 shrink-0">
                        <img className="w-full h-full object-cover group-hover:scale-110 duration-500 ease-in-out" src="/images/blog6.jpg" alt="thumbnail-image" />
                    </div>
                    <div className="card-body flex flex-1 md:flex-3 flex-col items-start gap-2 bg-primary md:bg-transparent text-card-featured-foreground md:text-card-thumbnail-foreground p-4 md:p-0">
                        <div className="card-header text-xl font-bold">
                            <div className="category-tag block md:hidden">
                                    <CategoryTag title="Sciene & Technology"/>
                            </div>
                            <h5 className="group-hover:underline text-[1.4rem] md:text-[1.2rem] lg::text-[1.5rem] capitalize">
                                modern teaching methods in schools
                            </h5>
                        </div>
                        <div className="card-footer flex flex-col gap-4 md:text-muted-foreground text-[1rem]">
                            <div className="card-footer-date flex items-center gap-1">
                                <CalendarClock size={18}/>
                                June 6, 2026
                             </div>
                        </div>
                    </div>
                </article>
            </Link>
           
        </>
       
    )
}