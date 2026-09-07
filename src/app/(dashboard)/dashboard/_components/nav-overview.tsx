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
		<SidebarMenu>
			<SidebarMenuItem>
				<Link href="/dashboard">
					<SidebarMenuButton tooltip="Overview" className="cursor-pointer">
						<Summary />
						<span>Summary</span>
					</SidebarMenuButton>
				</Link>
			</SidebarMenuItem>
		</SidebarMenu>
    </SidebarGroup>
  )
}
