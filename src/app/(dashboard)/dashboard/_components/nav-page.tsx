"use client"

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
                <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
            ))}
        </SidebarMenu>
    </SidebarGroup>
  )
}
