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
                    <ul className={`flex flex-col gap-6 capitalize font-normal pl-2 overflow-hidden transition-all duration-300 ease ${isOpen ? 'max-h-[300px] py-2' : 'h-0'}`}>
                        {items.map((item, index) => (
                            <li key={index} onClick={() => setIsSheetOpen?.(false)}>
                                <Link className="py-2" href={`/categories/${item.slug}`}> 
                                    <item.icon className="text-primary mr-2 shrink-0 inline" size={18}/>
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
