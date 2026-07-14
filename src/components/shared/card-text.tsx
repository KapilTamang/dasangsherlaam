import Link  from 'next/link';
import CategoryTag from './category-tag';
import {CardTextSkeleton} from '@/components/shared/skeletons';

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
    isLoading: boolean
}

export default function CardText({data, isLoading} : cardItemProps) {
    return(
        isLoading ? 
        (
            <CardTextSkeleton/>
        )
        :
        (
            <Link className="py-0 md:py-2 first-of-type:border-t-0 last-of-type:border-b-0 md:border-b md:border-foreground/20" href={`/blog/${data.slug}`}>
                <article className="card group flex items-start bg-primary md:bg-transparent">
                    <div className="card-content flex flex-2 md:flex-3 flex-col items-start gap-2 md:gap-1 text-card-featured-foreground md:text-card-thumbnail-foreground p-4 md:p-0">
                        <header className="card-header text-xl font-bold">
                            <div className="category-tag block md:hidden">
                                <CategoryTag title={data.category}/>
                            </div>
                            <h1 className="underline md:no-underline md:group-hover:underline text-[1.2rem] md:text-[1rem] leading-7 md:leading-6 capitalize duration-300">
                                {data.title}
                            </h1>
                        </header>
                        <footer className="card-footer flex flex-col gap-1 md:text-muted-foreground text-[0.9rem] capitalize">
                        <div className="card-footer-author">
                                by {data.author}
                        </div>
                            <div className="card-footer-date">
                                {data.date}
                            </div>
                        </footer>
                    </div>
                </article>
            </Link>
        )
    )
}