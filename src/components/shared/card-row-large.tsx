import Link from "next/link"

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

export default function CardRowLarge ({data}: cardItemProps){
    return (
        <Link href={`/blog/${data.slug}`}>
            <article className="card group flex flex-col md:flex-row md:min-h-[55vh]">
                <div className="card-image flex flex-1 overflow-hidden">
                    <img className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" src={data.imageURL} alt={data.title} />
                </div>
                <div className="card-content flex flex-1 flex-col gap-4 justify-center items-center text-center bg-accent text-foreground capitalize p-4 md:p-6">
                    <h1 className="w-full md:w-sm lg:w-lg text-[1.4rem] md:text-[2.5rem] lg:text-[3rem] leading-7 md:leading-11 lg:leading-14 font-extrabold group-hover:underline underline md:no-underline">{data.title}</h1>
                    <p className="line-clamp-3 w-full md:w-sm lg:w-lg font-light">
                        {data.description}
                    </p>
                    <p className="text-left capitalize font-semibold text-muted-foreground">by {data.author} </p>
                </div>
            </article>
        </Link>
    ) 
}