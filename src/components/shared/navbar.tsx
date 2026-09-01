"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image";
import {Menu, ChevronDown, Search, Library, CalendarCheck, ArrowUpToLine, MailCheckIcon,
 UserKeyIcon, LogOutIcon, CircleCheckBig, CalendarX, X} from "lucide-react";
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
import categories from "@/data/category";
import navlinks from "@/data/navlinks";
import UserDropdown from "./user-dropdown";

export default function Navbar() {

    //Define state  to track page scrolling
    const [isScrolled, setIsScrolled] = React.useState(false);

    //Define state to trigger dropdown menu
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    //Define state to track sheet visibility
    const [isSheetOpen, setIsSheetOpen] = React.useState(false);

    //Define state to toggle scroll top
    const [isScrollTop, setIsScrollTop] = React.useState(false);

    //Define state for user login state
    const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(true);

    //Define subscription state
    const isSubscribed = true;

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
    <nav className={`navbar-wrapper flex justify-between items-center px-[5%] md:px-[3%] py-4 md:py-5 sticky top-0 z-50 ${isScrolled ? "bg-background shadow-xs" : "bg-transparent shadow-none"}`}>
        <Link className="text-xl font-bold" href="/">Dasangsherlaam</Link>
        {/* Desktop: NavigationMenu (hidden on mobile) */}
        <NavigationMenu viewport={true} className="hidden md:flex text-[1rem]">
            <NavigationMenuList className="space-x-4">
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="cursor-pointer">Read More</NavigationMenuTrigger>
                    <NavigationMenuContent className="pt-2 pb-2">
                        <ul className="grid gap-2 w-200 md:grid-cols-3">
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
                {
                    isUserLoggedIn && 
                    <NavigationMenuItem className="opacity-100">
                        <UserDropdown/>
                    </NavigationMenuItem>
                }
                {
                    !isUserLoggedIn && 
                    <NavigationMenuItem className="hover:opacity-100">
                        {/* Using anchor tag to navigate to section ID */}
                        <a href="/#newsletter-section" className={`${buttonVariants()}`}>
                            <CalendarCheck data-icon="inline" /> Subscribe
                        </a>
                    </NavigationMenuItem>
                }
            </NavigationMenuList>
        </NavigationMenu>
         {/* Mobile: Sheet (hidden on desktop) */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="size-6!"/>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" showCloseButton={false}>
                <nav className="flex flex-col mb-8 gap-4 no-scrollbar overflow-y-auto">
                    <header className="text-[1.125rem] font-bold p-5 sticky top-0 z-50 bg-muted">
                        <Link href="/" onClick={() => setIsSheetOpen(false)}> Dasangsherlaam</Link>
                        <span className="absolute top-3 right-[18%]">
                            <ModeToggle/>
                        </span>
                        <SheetClose className="absolute top-4 right-[4%]">
                            <X className="w-6 h-6"/>
                        </SheetClose>
                    </header>
                    <main className="flex flex-col px-5 md:px-6 text-[0.9rem] font-semibold mt-2 gap-4">
                        {
                            isUserLoggedIn && 
                            <div className="user-dropdown-sm flex flex-col gap-6 items-start bg-accent px-4 py-5 mb-4">
                                <Image
                                    className="rounded-full mx-auto"
                                    src="/images/author.jpg"
                                    alt="user-img"
                                    width={100}
                                    height={100}
                                />
                                <div className="user-dropdown-links flex flex-col gap-5 text-[0.9rem]">
                                    <span className="w-full flex gap-4 justify-around items-center">
                                        <Link href="#" className="w-full flex gap-2 items-center capitalize pointer-events-none opacity-50">
                                            <MailCheckIcon className="w-5 h-5"/>
                                            Email Verified
                                        </Link>
                                        <CircleCheckBig className="w-5 h-5 text-primary"/>
                                    </span>
                                    {
                                        !isSubscribed ? 
                                        (
                                            <span className="w-full flex gap-4 justify-around items-center">
                                                <Link href="#" className="w-full flex gap-2 items-center capitalize">
                                                    <CalendarCheck className="w-5 h-5"/>
                                                    subscribe
                                                </Link>
                                            </span>
                                        ):
                                        (
                                            <span className="w-full flex gap-4 justify-around items-center">
                                                <Link href="#" className="w-full flex gap-2 items-center capitalize pointer-events-none opacity-50">
                                                    <CalendarCheck className="w-5 h-5"/>
                                                    subscribed
                                                </Link>
                                                <CircleCheckBig className="w-5 h-5 text-primary"/>
                                            </span>
                                        )
                                    }
                                    <span className="w-full flex gap-4 justify-around items-center">
                                        <Link href="#" className="w-full flex gap-2 items-center capitalize">
                                            <UserKeyIcon className="w-5 h-5"/>
                                            Change Password
                                        </Link>
                                    </span>
                                    {
                                        isSubscribed && 
                                            <span className="w-full flex justify-between items-center">
                                                <Link href="#" className="w-full flex gap-2 items-center capitalize text-destructive">
                                                    <CalendarX className="w-5 h-5"/>
                                                    unsubscribe
                                                </Link>
                                            </span>
                                    }
                                    <span className="w-full flex gap-2 items-center">
                                         <Link href="#" className="w-full flex gap-2 items-center capitalize text-destructive">
                                            <LogOutIcon className="w-5 h-5"/>
                                            logout
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        }
                        <span>
                            <span className="relative flex gap-2 items-center  mb-1" onClick={(toggleDropdown)}>
                                <Library className="w-5 h-5 text-primary"/>Read More <ChevronDown className={isDropdownOpen ? 'rotate-180 inline duration-300' : 'inline duration-300'} size={12}/>
                            </span>
                            <Dropdown items={ categories} isOpen={isDropdownOpen} setIsSheetOpen={setIsSheetOpen}/>
                        </span>
                        {
                            navlinks && navlinks.map((link, index) => (
                            
                                    <Link key={index} href={`/${link.slug}`} onClick={() => setIsSheetOpen(false)}>
                                        <span className="flex items-center gap-2 mb-2 capitalize">
                                            <link.icon className="w-5 h-5 text-primary"/>
                                            {link.title}
                                        </span>
                                    </Link>
                                
                            ))
                        }
                        {/* Using anchor tag to navigate to section ID */}
                        {
                            !isUserLoggedIn &&
                            <a href="/#newsletter-section" onClick={() => setIsSheetOpen(false)} className={`${buttonVariants()}`}>
                                <CalendarCheck data-icon="inline-start" /> Subscribe
                            </a>
                        }
                    </main>
                </nav>
            </SheetContent>
        </Sheet>
        {/* Scroll to top Icon */}
        <span onClick={scrollTop} className={`fixed ${isScrollTop ? 'bottom-5 right-5' : '-bottom-20 right-5'}  bg-foreground p-3 rounded-xl text-background duration-700 ease-in-out shadow-3xl`}><ArrowUpToLine className="animate-bounce" size={22}/></span>
    </nav>
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
