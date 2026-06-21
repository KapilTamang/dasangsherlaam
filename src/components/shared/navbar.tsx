"use client"

import * as React from "react"
import Link from "next/link"
import {Rss, Menu, ChevronDown, Search} from "lucide-react";
import Dropdown from "./dropdown";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"

export default function Navbar() {

    const [isScrolled, setIsScrolled] = React.useState(false);

    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    const categoryPages = [
        {
            title: "Science & Technology",
            href: "/science-technology",
            description: " Latest news and articles on science and technology."        
        },
        {
            title: "Amazing Facts",
            href: "/amazing-facts",
            description: "Interesting and amazing facts on different topics."
        },
        {
            title: "History & Culture",
            href: "/history-culture",
            description: "Discover the rich history and culture of different countries and civilizations."
        },
        {
            title: "Travel & Tourism",
            href: "/travel-tourism",
            description: "Explore the world through travel and tourism articles, guides, and tips."
        }
    ];

    const pages = [
        {
            title: 'About Me',
            href: '/about'
        },
        {
            title: 'Contact',
            href: '/contact',
        },
        {
            title: 'Search',
            href: '/search'
        }
    ]

    const categoryIcon = <Rss className="text-primary mr-1 shrink-0 inline" size={12}/>;

    React.useEffect(() => {
        //Catch page scrolling
        const handleScroll = () => {
            if(window.scrollY > 50) {
                setIsScrolled(true);
            }
            else{
                setIsScrolled(false);
            }
        }

        //Listen for scroll events
        window.addEventListener("scroll", handleScroll);
        //Clean up the event listener
        return() => window.removeEventListener("scroll", handleScroll);
    }, [isDropdownOpen]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

  return (
    <header className={`navbar-wrapper flex justify-between items-center md:px-[15%] px-[8%] py-5 duration-100 sticky top-0 z-50 ${isScrolled ? "bg-secondary shadow-xs" : "bg-transparent shadow-none"}`}>
        <Link className="font-bold" href="/">Dasangsherlaam</Link>
        {/* Desktop: NavigationMenu (hidden on mobile) */}
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-6">
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Read More</NavigationMenuTrigger>
                    <NavigationMenuContent className="pt-2 pb-2">
                        <ul className="w-96">
                            {
                                categoryPages && categoryPages.map((categoryPage, index) => (
                                    <ListItem key={index} href={categoryPage.href} title={categoryPage.title}>
                                        {categoryPage.description}
                                    </ListItem>
                                ))
                            }
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {
                    pages && pages.map((page, index) => (
                        <NavigationMenuItem key={index}>
                            <Link href={page.href}>
                            { page.title === "Search" ? (<Search className="inline" size={20}/>) : (page.title) }
                            </Link>
                        </NavigationMenuItem>
                    ))
                }
                <NavigationMenuItem className="hover:opacity-100">
                    <Button className="px-4 py-4">
                        <Link href="/login">Login</Link>
                    </Button>`
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
         {/* Mobile: Sheet (hidden on desktop) */}
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-sidebar border-sidebar-border text-sidebar-foreground">
                <nav className="flex flex-col px-6 font-semibold py-10 gap-4">
                    <header className="font-bold mb-2 text-sidebar-primary py-3 rounded">Dasangsherlaam</header>
                    <span>
                         <span className="relative mb-1 block" onClick={(toggleDropdown)}>
                            Read More <ChevronDown className={isDropdownOpen ? 'rotate-180 inline duration-300' : 'inline duration-300'} size={12}/>
                         </span>
                         <Dropdown items={categoryPages} isOpen={isDropdownOpen} icon={categoryIcon}/>
                    </span>
                    {
                        pages && pages.map((page, index) => (
                            <Link key={index} href={page.href}>{page.title}</Link>
                        ))
                    }
                    <Button className="px-4 py-5">
                        <Link href="/login">Login</Link>
                    </Button>
                </nav>
            </SheetContent>
        </Sheet>
    </header>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link className="mb-1 first-of-type:mt-1 hover:bg-muted" href={href}>
          <div className="flex gap-1">
            <Rss className="text-primary mr-1 shrink-0" size={12}/> 
            <div className="flex flex-col gap-1">
                <div className="leading-none font-bold">
                    {title}
                </div>
                <div className="line-clamp-2 text-muted-foreground">{children}</div>
            </div>
          </div>
            </Link>
        </NavigationMenuLink>
    </li>
  )
}
