"use client";

import React from 'react';
import Link from 'next/link';
import {Avatar, AvatarImage} from "@/components/ui/avatar"
import { MailCheckIcon, CalendarCheck2Icon, UserKey, LogOutIcon, ChevronDown, CircleCheckBig} from "lucide-react"
import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuSeparator,DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function UserDropdown() {
    //Dropdown open/close state
    const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false);

    //User subscription status
    const [isSubscribed, setIsSubscribed] = React.useState<boolean>(false);

    return(
        
        <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger>
                <div className="avatar-container flex h-12 gap-1 items-center cursor-pointer">
                    <Avatar>
                        <AvatarImage
                        className="border border-primary/50 p-0.5"
                        src="/images/author.jpg"
                        alt="user-image"
                        />
                    </Avatar>
                    <ChevronDown className={`w-4 h-4 duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}/>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <span className="w-full flex justify-between items-center">
                        <Link href="#" className="w-full flex gap-2 items-center capitalize pointer-events-none opacity-50">
                            <MailCheckIcon/>
                            Email Verified
                        </Link>
                        <CircleCheckBig className="text-primary"/>
                    </span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                     {
                        isSubscribed ? 
                        (
                            <span className="w-full flex justify-between items-center">
                                <Link href="#" className="w-full flex gap-2 items-center capitalize pointer-events-none opacity-50">
                                    <CalendarCheck2Icon/>
                                    Subscribed
                                </Link>
                                <CircleCheckBig className="text-primary"/>
                            </span>
                        )
                        :(
                            <span>
                                <Link href="#" className="w-full flex gap-2 items-center capitalize">
                                    <CalendarCheck2Icon/>
                                    Subscribe
                                </Link>
                            </span>
                        )
                    }
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="#" className="w-full flex gap-2 items-center capitalize">
                        <UserKey />
                        Change Password
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                    <LogOutIcon />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}