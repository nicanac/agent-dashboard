"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FileText, AppWindow, Receipt, Users, MessageSquare, Briefcase, Settings, LogOut, Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboards", href: "/" },
  { icon: FileText, label: "Reports", href: "/reports" },
  { icon: AppWindow, label: "Applications", href: "/apps" },
  { icon: Receipt, label: "Proposal", href: "/proposal" },
  { icon: Users, label: "Customers", href: "/customers" },
  { icon: MessageSquare, label: "Leads", href: "/leads" },
  { icon: Briefcase, label: "Projects", href: "/projects" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-[280px] border-r bg-background flex flex-col">
      <div className="flex h-16 items-center px-6 border-b">
        <h1 className="text-xl font-bold tracking-tight">DURALUX</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-4">
        <div className="space-y-1">
          <p className="px-2 text-xs font-semibold text-muted-foreground mb-4">NAVIGATION</p>
          {sidebarItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start", 
                pathname === item.href && "bg-secondary"
              )}
              asChild
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Link>
            </Button>
          ))}
        </div>

        <Separator className="my-6" />

        <div className="space-y-1">
           <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
             <LogOut className="mr-2 h-4 w-4" />
             Authentication
           </Button>
        </div>
      </div>

      <div className="p-4 mt-auto">
        <Card className="bg-slate-50 border-slate-100 shadow-sm">
          <CardHeader className="pb-2">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <Download className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-sm font-semibold">Downloading Center</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-xs mb-4">
              Duralux is a production ready CRM to get started up and running easily.
            </CardDescription>
            <Button className="w-full text-xs" size="sm">DOWNLOAD NOW</Button>
          </CardContent>
        </Card>
      </div>
    </aside>
  )
}
