"use client"

import Link from "next/link"
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
		<Link href="/dashboard">
			<SidebarMenu>
				<SidebarMenuItem>
					<SidebarMenuButton tooltip="Overview">
						<Summary />
						<span>Summary</span>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
		</Link>
    </SidebarGroup>
  )
}
