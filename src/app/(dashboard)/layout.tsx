// app/(dashboard)/layout.tsx
import { SidebarProvider, SidebarInset} from "@/components/ui/sidebar";
import { AppSidebar } from "./dashboard/_components/app-sidebar";
import TopNav from "./dashboard/_components/top-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
			<TopNav/>
			<main className="p-4">
				{children}
			</main>
        </SidebarInset>
    </SidebarProvider>
  );
}	
