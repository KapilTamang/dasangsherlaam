import Link from "next/link";
import Image from "next/image";
import CategoryTag from "../category-tag";
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
    data: cardItem,
    width: string
}


export default function Card({data, width}: cardItemProps) {
    return (
        <Link href={`/blog/${data.slug}`}>
            {/* Using inline style for dynamic width */}
            <article className={`card group relative bg-primary md:bg-accent flex flex-col gap-0 md:gap-2 shadow-sm transition-shadow duration-500 ease-in-out`} style={{width: `${width}`}}>
                <figure className="card-image overflow-hidden">
                    <Image className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out`}
                        src={data.imageURL} 
                        alt={data.title}
                        width={1000}
                        height={800}
                        priority
                    />
                </figure>
                <div className="card-content flex flex-col gap-2 p-4 md:p-4 text-card-featured-foreground md:text-foreground">
                    <div className="card-category-tag absolute left-2 top-3">
                        <CategoryTag title={data.category}/>
                    </div>
                    <header className="card-header text-[1.3rem] lg:text-[1.2rem] font-extrabold capitalize">
                        <h1 className="line-clamp-3 underline md:no-underline group-hover:underline duration-300">{data.title}</h1>
                    </header>
                    <div className="card-body">
                        <p className="line-clamp-2">
                            {data.description}
                        </p>
                    </div>
                    <footer className="card-footer flex gap-8 mt-2 text-[0.9rem] md:text-[1rem] md:text-muted-foreground">
                        <div className="card-footer-date flex items-center gap-1">
                            <CalendarClock size={20}/>
                            {data.date}
                        </div>
                        <div className="card-footer-author flex items-center gap-1">
                            <UserPen size={20}/> 
                            {data.author}
                        </div>
                    </footer>
                </div>
            </article>
        </Link>
    )
}