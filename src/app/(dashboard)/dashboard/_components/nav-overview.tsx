"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { LayoutDashboard } from "lucide-react"

export function NavOverview()
{
	const pathname = usePathname();
	
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Overview</SidebarGroupLabel>
			<SidebarMenu>
				<SidebarMenuItem>
					<Link href="/dashboard">
						<SidebarMenuButton tooltip="Overview" className="cursor-pointer" isActive={pathname === '/dashboard' ? true : false}>
							<LayoutDashboard />
							<span>Dashboard</span>
						</SidebarMenuButton>
					</Link>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarGroup>
	)
}
