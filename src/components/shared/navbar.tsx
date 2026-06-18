"use client"

import * as React from "react"
import Link from "next/link"
import {Rss, Menu, ChevronDown} from "lucide-react";
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

    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    const categories = [
        {
            title: "Science & Technology",
            href: "/science-technology",        
        },
        {
            title: "Amazing Facts",
            href: "/amazing-facts",
        },
        {
            title: "History & Culture",
            href: "/history-culture",
        },
        {
            title: "Travel & Tourism",
            href: "/travel-tourism",
        }
    ];

    const categoryIcon = <Rss className="text-primary mr-1 shrink-0 inline" size={12}/>;

    React.useEffect(() => {
    //
    }, [isDropdownOpen]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

  return (
    <header className="navbar-wrapper flex justify-between items-center md:px-[15%] px-[8%] py-5 shadow-xs sticky top-0 z-50">
        <Link href="/">Dasangsherlaam</Link>
        {/* Desktop: NavigationMenu (hidden on mobile) */}
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-10">
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Read More</NavigationMenuTrigger>
                    <NavigationMenuContent className="pt-2 pb-2">
                        <ul className="w-96">
                            <ListItem href="/docs" title="Science & Technology">
                               Latest news and articles on science and technology.
                            </ListItem>
                            <ListItem href="/docs/installation" title="Amazing Facts">
                                Interesting and amazing facts on different topics.
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="History & Culture">
                                Discover the rich history and culture of different countries and civilizations.
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Travel & Tourism">
                                Explore the world through travel and tourism articles, guides, and tips.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/about">
                        About Me
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/contact">
                        Contact
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/login">
                        Login
                    </Link>
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
            <SheetContent side="left">
                <nav className="flex flex-col px-6 font-semibold py-10 gap-4">
                    <span>
                         <span className="relative mb-1 block" onClick={(toggleDropdown)}>
                            Read More <ChevronDown className={isDropdownOpen ? 'rotate-180 inline duration-300' : 'inline duration-300'} size={12}/>
                         </span>
                         <Dropdown items={categories} isOpen={isDropdownOpen} icon={categoryIcon}/>
                    </span>
                        <Link href="/about">About Me</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/login">Login</Link>
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
