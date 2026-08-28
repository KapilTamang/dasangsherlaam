import { LucideIcon } from "lucide-react";
import Link from "next/link"

interface itemList {
    id: number,
    title: string;
    slug: string;
    description: string;
    icon: LucideIcon
}

interface itemListProps {
    items: itemList[];
    isOpen?: boolean;
    setIsSheetOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Dropdown({ items, isOpen, setIsSheetOpen }: itemListProps) {
    return (
        <div>
            {
                (
                    <ul className={`flex flex-col gap-5 capitalize font-normal pl-4 mt-3 overflow-hidden bg-accent rounded-sm transition-all duration-300 ease ${isOpen ? 'max-h-75 py-4' : 'h-0'}`}>
                        {items.map((item, index) => (
                            <li key={index} onClick={() => setIsSheetOpen?.(false)}>
                                <Link className="py-2" href={`/categories/${item.slug}`}> 
                                    <item.icon className="w-5 h-5 text-primary mr-2 shrink-0 inline"/>
                                    {item.title}
                                 </Link>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>      
        
    )
}
