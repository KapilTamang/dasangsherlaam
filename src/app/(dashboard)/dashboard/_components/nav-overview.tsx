"use client"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { Summary } from "lucide-react"

export function NavOverview() 

{
  return (
    <SidebarGroup>
         <SidebarGroupLabel>Overview</SidebarGroupLabel>
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton tooltip="Overview">
                    <Summary />
                    <span>Summary</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarGroup>
  )
}
