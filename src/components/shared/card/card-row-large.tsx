import Link from "next/link"
import Image from "next/image";
import { CardRowLargeSkeleton } from "../skeletons";
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

export default function CardRowLarge ({data, isLoading}: cardItemProps){
    return (
        isLoading ? 
        (
            <CardRowLargeSkeleton/>
        )
        :
        (
            <Link href={`/blog/${data.slug}`}>
                <article className="card group flex flex-col md:flex-row md:min-h-[55vh]">
                    <figure className="card-image flex flex-1 overflow-hidden">
                        <Image className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" 
                            src={data.imageURL} 
                            alt={data.title}
                            width={1200}
                            height={1000}
                            priority
                        />
                    </figure>
                    <div className="card-content flex flex-1 flex-col gap-4 justify-center items-center text-center bg-accent text-foreground capitalize p-4 md:p-6">
                        <header className="card-header">
                            <h1 className="w-full md:w-sm lg:w-lg text-[1.3rem] md:text-[2rem] lg:text-[2.8rem] leading-8 md:leading-11 lg:leading-14 font-extrabold group-hover:underline underline md:no-underline">{data.title}</h1>
                        </header>
                        <p className="line-clamp-3 w-full md:w-sm lg:w-lg font-light">
                            {data.description}
                        </p>
                        <p className="text-left capitalize font-semibold text-muted-foreground">by {data.author} </p>
                    </div>
                </article>
            </Link>
        )
    ) 
}