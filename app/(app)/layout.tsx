import { AppSidebar } from "@/components/workspace/app-sidebar";
import { SiteHeader } from "@/components/workspace/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset className="mt-16">{children}</SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
