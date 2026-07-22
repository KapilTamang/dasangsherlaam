"use client"

import * as React from "react"
import Link from "next/link"
import {Rss, Menu, ChevronDown, Search, Library, CalendarCheck, ArrowUpToLine} from "lucide-react";
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
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import { ModeToggle } from "./theme-toggle";
import categories from "@/data/category";
import navlinks from "@/data/navlinks";

export default function Navbar() {

    //Define state  to track page scrolling
    const [isScrolled, setIsScrolled] = React.useState(false);

    //Define state to trigger dropdown menu
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    //Define state to track sheet visibility
    const [isSheetOpen, setIsSheetOpen] = React.useState(false);

    //Define state to toggle scroll top
    const [isScrollTop, setIsScrollTop] = React.useState(false);

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
                setIsScrollTop(true);
            }
            else{
                setIsScrolled(false);
                setIsScrollTop(false);
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

    //Callback function for scroll top
    const scrollTop = () => {
        window.scrollTo(0, 0)
    }

  return (
    <header className={`navbar-wrapper flex justify-between items-center px-[5%] md:px-[3%] py-4 md:py-5 sticky top-0 z-50 ${isScrolled ? "bg-secondary shadow-xs" : "bg-transparent shadow-none"}`}>
        <Link className="text-xl font-bold" href="/">Dasangsherlaam</Link>
        {/* Desktop: NavigationMenu (hidden on mobile) */}
        <NavigationMenu className="hidden md:flex text-[1rem]">
            <NavigationMenuList className="space-x-6">
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Read More</NavigationMenuTrigger>
                    <NavigationMenuContent className="pt-2 pb-2">
                        <ul className="grid gap-2 md:w-[500px] md:grid-cols-2 lg:w-[520px]">
                            {
                                categories && categories.map((category, index) => (
                                    <ListItem key={index} href={`/categories/${category.slug}`} title={category.title}>
                                        <div className="list-item-content flex gap-1">
                                            <div className="list-item-header flex items-start">
                                                <category.icon className="text-primary shrink-0 mt-2" style={{width: '18px', height: '18px'}}/>
                                            </div>
                                            <div className="list-item-body flex flex-col gap-2">
                                               <span className="text-[0.95rem] leading-none font-bold bg-accent px-3 py-2 rounded-md">{category.title}</span>
                                               <span className="text-[0.9rem] line-clamp-2 text-muted-foreground px-3">{category.description}</span>
                                            </div>
                                        </div>
                                    </ListItem>
                                ))
                            }
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {
                    navlinks && navlinks.map((link, index) => (
                        <NavigationMenuItem key={index}>
                            <Link href={`/${link.slug}`}>
                            { link.title === "search" ? (<Search className="inline" size={20}/>) : (link.title) }
                            </Link>
                        </NavigationMenuItem>
                    ))
                }
                <NavigationMenuItem>
                    <ModeToggle/>
                </NavigationMenuItem>
                <NavigationMenuItem className="hover:opacity-100">
                    {/* Using anchor tag to navigate to section ID */}
                    <a href="/#newsletter-section" className={`px-3 py-4.5 text-[0.9rem] ${buttonVariants()}`}>
                        <CalendarCheck data-icon="inline" /> Subscribe
                    </a>
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
                        <Dropdown items={ categories} isOpen={isDropdownOpen} setIsSheetOpen={setIsSheetOpen}/>
                    </span>
                    {
                        navlinks && navlinks.map((link, index) => (
                        
                                <Link key={index} href={`/${link.slug}`} onClick={() => setIsSheetOpen(false)}>
                                    <span className="flex items-center gap-2 mb-2 capitalize">
                                        <link.icon className="text-primary" size={18} />
                                        {link.title}
                                    </span>
                                </Link>
                            
                        ))
                    }
                    <span className="absolute top-3 right-[18%]">
                        <ModeToggle/>
                    </span>
                    {/* Using anchor tag to navigate to section ID */}
                    <a href="/#newsletter-section" onClick={() => setIsSheetOpen(false)} className={`px-4 py-5 text-[1rem] ${buttonVariants()}`}>
                         <CalendarCheck data-icon="inline-start" /> Subscribe
                    </a>
                </nav>
            </SheetContent>
        </Sheet>
        {/* Scroll to top Icon */}
        <span onClick={scrollTop} className={`fixed ${isScrollTop ? 'bottom-5 right-5' : '-bottom-20 right-5'}  bg-foreground p-3 rounded-xl text-background duration-700 ease-in-out shadow-3xl`}><ArrowUpToLine className="animate-bounce" size={22}/></span>
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
            <div className="flex flex-col gap-1">
                <div>{children}</div>
            </div>
            </Link>
        </NavigationMenuLink>
    </li>
  )
}
