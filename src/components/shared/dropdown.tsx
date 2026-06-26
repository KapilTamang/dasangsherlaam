import Link from "next/link"

interface itemList {
    id: number,
    title: string;
    slug: string;
    description: string;
}

interface itemListProps {
    items: itemList[];
    isOpen?: boolean;
    icon?: React.ReactNode;
    setIsSheetOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Dropdown({ items, isOpen, icon, setIsSheetOpen }: itemListProps) {
    return (
        <div>
            {
                (
                    <ul className={`flex flex-col gap-4 capitalize font-normal pl-2 overflow-hidden transition-all duration-300 ease ${isOpen ? 'max-h-[300px] py-2' : 'h-0'}`}>
                        {items.map((item, index) => (
                            <li key={index} onClick={() => setIsSheetOpen?.(false)}>
                                <Link className="py-2" href={`/categories/${item.slug}`}> {icon ? icon : ''} {item.title}</Link>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>      
        
    )
}
