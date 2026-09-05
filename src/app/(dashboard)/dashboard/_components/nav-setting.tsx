"use client"

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
           
            <SidebarMenuItem>
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
