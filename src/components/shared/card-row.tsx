import Link  from 'next/link';
import Image from 'next/image';
import CategoryTag from './category-tag';
import { CardRowSkeleton } from './skeletons';

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
    type: string,
    isLoading: boolean
}

export default function CardRow({data, type, isLoading} : cardItemProps) {
    return(
        isLoading ? 
        (
            <CardRowSkeleton type={type}/>
        ):
        (
            <Link className={`flex-1 py-0 md:py-2 md:last-of-type:border-b-0 md:border-b md:border-foreground/20 ${type === 'exclusive' ? 'border-none' : ''}`} href={`/blog/${data.slug}`}>
                <article className="card group flex gap-0 md:gap-3 px-4 md:px-0 bg-primary md:bg-transparent">
                    <figure className="card-image flex flex-1 md:w-full md:h-full overflow-hidden bg-primary">
                        <Image className="w-full h-auto object-contain group-hover:scale-110 duration-500 ease-in-out" 
                            src={data.imageURL ?? ''} 
                            alt={data.title}
                            width={110}
                            height={60}
                            priority
                        />
                    </figure>
                    <div className="card-content flex flex-2 flex-col items-start gap-3 text-card-featured-foreground md:text-card-thumbnail-foreground p-4 md:p-0">
                        <header className="card-header text-xl font-bold">
                            <div className="category-tag block md:hidden">
                                <CategoryTag title={data.category}/>
                            </div>
                            <h1 className="line-clamp-2 underline md:no-underline md:group-hover:underline text-[1.2rem] md:text-[1rem] leading-7 md:leading-6 capitalize duration-300">
                                {data.title}
                            </h1>
                        </header>
                        <footer className="card-footer flex flex-col gap-2 md:text-muted-foreground text-[0.9rem]">
                            <div className="category-tag hidden md:block">
                                <span className="bg-primary text-card-featured-foreground px-2 py-1 text-[0.8rem] capitalize">
                                    {data.category}
                                </span>
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