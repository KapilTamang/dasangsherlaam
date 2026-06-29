
interface sectionTitle{
    title: string
}

export default function SectionTitle({title}: sectionTitle) {
    return (
        <div className="border-t-2 border-primary capitalize text-card-featured-foreground text-[1.1rem] font-bold">
            <span className="bg-primary capitalize px-4 py-1">{title}</span>
        </div>
    )
}