import Link from "next/link";
import CategoryTag from "./category-tag";
import { CalendarClock, UserPen } from "lucide-react";

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


export default function Card({data}: cardItemProps) {
    return (
        <Link href={`/blog/${data.slug}`}>
            <article className="card group min-w-[360px] relative bg-primary md:bg-transparent flex flex-col transition-shadow duration:500 ease-in-out">
                <div className="card-image overflow-hidden">
                        <img className="group-hover:scale-110 transition-transform duration-500 ease-in-out" src={data.imageURL} alt={data.title}/>
                </div>
                <div className="card-content flex flex-col gap-2 p-4 md:px-0 md:pt-2 md:pb-0 text-card-featured-foreground md:text-foreground">
                    <div className="card-category-tag absolute left-2 top-2">
                        <CategoryTag title={data.category}/>
                    </div>
                    <div className="card-header text-[1.4rem] lg:text-[1.3rem] font-extrabold capitalize">
                        <h1 className="line-clamp-3 underline md:no-underline group-hover:underline duration-300">{data.title}</h1>
                    </div>
                    <div className="card-body">
                        <p className="line-clamp-2">
                            {data.description}
                        </p>
                    </div>
                     <div className="card-footer flex gap-8 mt-2 text-[0.9rem] md:text-[1rem] md:text-muted-foreground">
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