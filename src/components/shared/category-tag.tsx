interface categoryProps{
    title: string
}

export default function CategoryTag({title}: categoryProps) {
    return(
        <div className="mb-4 mt-1">
            <span className="bg-card-featured-foreground md:bg-primary text-card-featured-background md:text-card-featured-foreground px-3 md:px-4 py-1 md:py-2 text-[0.8rem] md:text-[1rem] capitalize font-semibold">
                {title}
            </span>
        </div>
    )
}