import { SidebarProvider, SidebarTrigger } from "@components/ui/sidebar"
import { AppSidebar } from "@components/custom-ui/app-sidebar"

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
