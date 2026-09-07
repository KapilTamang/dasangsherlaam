"use client"

import Link from "next/link"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import pages from "@/data/dashboard/page"

export function NavPage() 

{
  return (
    <SidebarGroup>
        <SidebarGroupLabel className="w-auto">Manage Pages</SidebarGroupLabel>
        <SidebarMenu>
            {pages.map((item) => (
				<SidebarMenuItem key={item.id}>
					<Link href={item.url}>
						<SidebarMenuButton tooltip={item.title} className="cursor-pointer">
								{item.icon && <item.icon />}
								<span>{item.title}</span>
						</SidebarMenuButton>
					</Link>
				</SidebarMenuItem>
            ))}
        </SidebarMenu>
    </SidebarGroup>
  )
}
