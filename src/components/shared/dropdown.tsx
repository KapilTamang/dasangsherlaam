import Link from "next/link"

interface itemList {
    title: string;
    href: string;
}

interface itemListProps {
    items: itemList[];
    isOpen?: boolean;
    icon?: React.ReactNode;
}

export default function Dropdown({ items, isOpen, icon }: itemListProps) {
    return (
        <div>
            {
                (
                    <ul className={`flex flex-col gap-4 font-normal pl-2 overflow-hidden transition-all duration-300 ease ${isOpen ? 'max-h-[300px] py-2' : 'h-0'}`}>
                        {items.map((item, index) => (
                            <li key={index}>
                                <Link className="py-2" href={item.href}> {icon ? icon : ''} {item.title}</Link>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>      
        
    )
}
