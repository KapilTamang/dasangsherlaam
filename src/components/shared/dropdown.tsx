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
                isOpen && (
                    <ul className={`flex flex-col gap-4 bg-muted font-normal py-2 pl-2 rounded ${isOpen ? 'block' : 'hidden'}`}>
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
