import Link  from 'next/link';
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

export default function ThumbnailCard({data} : cardItemProps) {
    return(
        <Link className="pb-0 md:pb-4 md:border-b md:border-foreground/20" href={`/blog/${data.slug}`}>
            <article className="card group flex gap-0 md:gap-3 bg-primary md:bg-transparent">
                <div className="card-image flex flex-1 overflow-hidden">
                    <img className="md:w-full md:h-full object-contain group-hover:scale-110 duration-500 ease-in-out" src={data.imageURL ?? ''} alt={data.title} />
                </div>
                <div className="card-content flex flex-2 md:flex-3 flex-col items-start gap-2 md:gap-0 text-card-featured-foreground md:text-card-thumbnail-foreground p-4 md:p-0">
                    <div className="card-header text-xl font-bold">
                        <div className="category-tag block md:hidden">
                            <CategoryTag title={data.category}/>
                        </div>
                        <h1 className="md:line-clamp-1 underline md:no-underline md:group-hover:underline text-[1.2rem] md:text-[1.1rem] capitalize duration-300">
                            {data.title}
                        </h1>
                    </div>
                    <div className="card-footer flex flex-col gap-1 md:text-muted-foreground text-[0.9rem]">
                            <div className="card-footer-date">
                            {data.author}
                        </div>
                        <div className="card-footer-date">
                            {data.date}
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    )
}