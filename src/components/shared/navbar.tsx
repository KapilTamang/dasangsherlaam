"use client"

import * as React from "react"
import Link from "next/link"
import {Rss, Menu, ChevronDown, Search, LogIn, Send, Info, Library, CalendarCheck} from "lucide-react";
import Dropdown from "./dropdown";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {Button, buttonVariants} from "@/components/ui/button"
import {Sheet, SheetContent, SheetTrigger, SheetClose} from "@/components/ui/sheet"
import { ModeToggle } from "./theme-toggle";

export default function Navbar() {

    //Set state  to track page scrolling
    const [isScrolled, setIsScrolled] = React.useState(false);

    //Set state to trigger dropdown menu
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    //Set state to track sheet visibility
    const [isSheetOpen, setIsSheetOpen] = React.useState(false);

    const categoryPages = [
        {
            title: "Featured",
            href: "/categories/featured",
            description: "Exciting articles from author."        
        },
        {
            title: "Science & Technology",
            href: "/categories/science-technology",
            description: " Latest news and articles on science and technology."        
        },
        {
            title: "Amazing Facts",
            href: "/categories/amazing-facts",
            description: "Interesting and amazing facts on different topics."
        },
        {
            title: "History & Culture",
            href: "/categories/history-culture",
            description: "Discover the rich history and culture of different countries and civilizations."
        },
        {
            title: "Travel & Tourism",
            href: "/categories/travel-tourism",
            description: "Explore the world through travel and tourism articles, guides, and tips."
        }
    ];

    const pages = [
        {
            title: 'About',
            href: '/about',
            icon: Info
        },
        {
            title: 'Contact',
            href: '/contact',
            icon: Send
        },
        {
            title: 'Search',
            href: '/search',
            icon: Search
        }
    ]

    const categoryIcon = <Rss className="text-primary mr-1 shrink-0 inline" size={12}/>;

    React.useEffect(() => {
        //Close dropdown sub menu on sheet close
        if(!isSheetOpen) {
           setTimeout(() => {
            setIsDropdownOpen(false);
           }, 500);
        }
        
        //Catch page scrolling
        const handleScroll = () => {
            if(window.scrollY > 0) {
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
    }, [isSheetOpen, isDropdownOpen]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

  return (
    <header className={`navbar-wrapper flex justify-between items-center px-[5%] md:px-[3%] py-4 md:py-5 sticky top-0 z-50 ${isScrolled ? "bg-secondary shadow-xs" : "bg-transparent shadow-none"}`}>
        <Link className="text-xl font-bold" href="/">Dasangsherlaam</Link>
        {/* Desktop: NavigationMenu (hidden on mobile) */}
        <NavigationMenu className="hidden md:flex text-[1.1rem]">
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
                <NavigationMenuItem>
                    <ModeToggle/>
                </NavigationMenuItem>
                <NavigationMenuItem className="hover:opacity-100">
                    <Link href="/" className={`px-4 py-5 text-[1rem] ${buttonVariants()}`}>
                        <CalendarCheck data-icon="inline-start" /> Subscribe
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
         {/* Mobile: Sheet (hidden on desktop) */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="size-6!"/>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <nav className="flex flex-col px-6 text-[1rem] font-semibold mt-4 gap-4">
                    <header className="text-[1.125rem] font-bold py-3 rounded">
                        <Link href="/" onClick={() => setIsSheetOpen(false)}> Dasangsherlaam</Link>
                    </header>
                    <span>
                         <span className="relative flex gap-2 items-center  mb-1" onClick={(toggleDropdown)}>
                            <Library className="text-primary" size={18} />Read More <ChevronDown className={isDropdownOpen ? 'rotate-180 inline duration-300' : 'inline duration-300'} size={12}/>
                         </span>
                        <Dropdown items={categoryPages} isOpen={isDropdownOpen} icon={categoryIcon} setIsSheetOpen={setIsSheetOpen}/>
                    </span>
                    {
                        pages && pages.map((page, index) => (
                        
                                <Link key={index} href={page.href} onClick={() => setIsSheetOpen(false)}>
                                    <span className="flex items-center gap-2 mb-2">
                                        <page.icon className="text-primary" size={18} />
                                        {page.title}
                                    </span>
                                </Link>
                            
                        ))
                    }
                    <span className="absolute top-3 right-[18%]">
                        <ModeToggle/>
                    </span>
                    <Link href="" onClick={() => setIsSheetOpen(false)} className={`px-4 py-5 text-[1rem] ${buttonVariants()}`}>
                         <CalendarCheck data-icon="inline-start" /> Subscribe
                    </Link>
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
                <div className="text-[1rem] leading-none font-bold">
                    {title}
                </div>
                <div className="text-[1rem] line-clamp-2 text-muted-foreground">{children}</div>
            </div>
          </div>
            </Link>
        </NavigationMenuLink>
    </li>
  )
}
