"use client";

import React from 'react';
import {Avatar, AvatarImage} from "@/components/ui/avatar"
import { MailCheckIcon, CalendarCheck2Icon, UserKey, LogOutIcon, ChevronDown} from "lucide-react"
import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuSeparator,DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function UserDropdown() {
    //Dropdown open/close state
    const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false);

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
                        <MailCheckIcon />
                        Verify Email
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <CalendarCheck2Icon />
                        Subscribe
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <UserKey />
                        Change Password
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