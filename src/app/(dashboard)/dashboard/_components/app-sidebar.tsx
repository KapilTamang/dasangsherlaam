"use client"

import * as React from "react"
import {
  BookOpen, PieChart, LayoutGrid, Users, Mails,
  Settings} from "lucide-react"

import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, SidebarMenuButton, SidebarMenu, useSidebar,} from "@/components/ui/sidebar"

import { NavUser } from "./nav-user"
import { NavAnalytic } from "./nav-analytic"
import { NavContent } from "./nav-content"

const data = {
  user: {
    name: "Dasangsherlaam",
    email: "dasangsherlaam@gmail.com",
    avatar: "/images/author.jpg",
  },
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	//Sidebar open/close state
	const { open } = useSidebar()
	
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<div className={`flex items-center gap-2 ${open ? 'ml-2' : ''} duration-200`}>
					<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
						<span className="uppercase font-extrabold text-[1.2rem]">d</span>
					</div>
					<div className="grid flex-1 text-left text-sm leading-tight">
						<span className="truncate font-bold">DasangSherlaam</span>
						<span className="truncate text-xs">Dashboard</span>
					</div>
				</div>
			</SidebarHeader>
			<SidebarContent>
				<NavAnalytic/>
				<NavContent/>
			</SidebarContent>
			<SidebarFooter> 
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}
