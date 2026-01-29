"use client"

import { Bell, Search, Globe, Moon, Maximize, Menu, ChevronRight, ListFilter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <div className="sticky top-0 z-30 w-full bg-background border-b">
      {/* Top Bar */}
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="hidden md:flex">
             <Menu className="h-4 w-4" />
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white hidden md:flex rounded-full h-8 px-4 text-xs font-semibold">
             +
          </Button>
          <Button variant="outline" className="hidden md:flex h-8 text-xs">
            MEGA MENU
          </Button>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hidden md:flex">
            <Globe className="h-5 w-5" />
          </Button>
           <Button variant="ghost" size="icon" className="text-muted-foreground hidden md:flex">
            <Maximize className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Moon className="h-5 w-5" />
          </Button>
          <div className="relative">
             <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
            </Button>
          </div>
          
          <Separator orientation="vertical" className="h-6 mx-2" />
          
          <Avatar className="h-8 w-8 cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Sub-Header / Breadcrumbs & Filters */}
      <div className="flex h-14 items-center justify-between px-6 border-t bg-slate-50/50">
        <div className="flex items-center text-sm text-muted-foreground">
           <span className="font-semibold text-foreground mr-2">Dashboard</span>
           <span className="mx-2 text-muted-foreground/50">|</span>
           <span>Home</span>
           <ChevronRight className="h-4 w-4 mx-1" />
           <span>Dashboard</span>
        </div>

        <div className="flex items-center gap-2">
           <div className="text-xs font-medium bg-white px-3 py-1.5 rounded-md border shadow-sm text-muted-foreground hidden md:block">
             JUL 22, 24 - AUG 20, 24
           </div>
           <Button variant="outline" size="sm" className="h-8 bg-white text-xs font-medium">
             <ListFilter className="mr-2 h-3 w-3" />
             FILTER
           </Button>
        </div>
      </div>
    </div>
  )
}
