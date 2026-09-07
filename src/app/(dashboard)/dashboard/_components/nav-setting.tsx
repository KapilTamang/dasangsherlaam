"use client"

import Link from "next/link"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import settings from "@/data/dashboard/settings"

export function NavSetting() 

{
  return (
    <SidebarGroup>
         <SidebarGroupLabel>Settings</SidebarGroupLabel>
        <SidebarMenu>
            {settings.map((item) => (
            <SidebarMenuItem key={item.id}>
              <Link href={item.url}>
                <SidebarMenuButton tooltip={item.title}>
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
