"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import {Separator} from "@/components/ui/separator"
import { ModeToggle } from "@/components/shared/theme-toggle"
import {NavBreadcumb} from "./nav-breadcumb"

export default function TopNav () {

    return(
        <header className="sticky top-0 bg-background flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 shadow-xs">
            <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4 my-auto"
                />
                <NavBreadcumb/>
            </div>
            <div className="fixed top-4 right-5">
                <ModeToggle/>
            </div>
        </header>
    )
}