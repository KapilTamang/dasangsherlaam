"use client"

import * as React from "react"
import {
  BookOpen, PieChart, LayoutGrid, Users, Target, Mails,
  Settings} from "lucide-react"

import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, SidebarMenuButton, SidebarMenu, useSidebar,} from "@/components/ui/sidebar"

import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"

// This is sample data.
const data = {
  user: {
    name: "Dasangsherlaam",
    email: "dasangsherlaam@gmail.com",
    avatar: "/images/author.jpg",
  },

  navMain: [
    {
      title: "Analytics",
      url: "#",
      icon: PieChart,
      items: [
        {
          title: "Posts",
          url: "#",
        },
        {
          title: "Users",
          url: "#",
        },
      ],
    },
    {
      title: "Posts",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Create New",
          url: "#",
        },
        {
          title: "All Posts",
          url: "#",
        },
      ],
    },
    {
      title: "Categories",
      url: "#",
      icon: LayoutGrid,
      items: [
        {
          title: "Create New",
          url: "#",
        },
        {
          title: "All Categories",
          url: "#",
        },
      ],
    },
    {
      title: "Users",
      url: "#",
      icon: Users,
	   items: [
        {
          title: "All Users",
          url: "#",
        },
      ],
    },
	{
      title: "Messages",
      url: "#",
      icon: Mails,
      items: [
        {
          title: "All Messages",
          url: "#",
        }
      ],
    },
	{
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "All Settings",
          url: "#",
        }
      ],
    },
  ],
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
				<NavMain items={data.navMain} />
			</SidebarContent>
			<SidebarFooter> 
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}
