"use client"

import { useEffect, useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"
import { Terminal, Code, MessageSquare, Zap } from "lucide-react"

interface Activity {
  id: string
  type: string
  summary: string
  created_at: string
}

export function ActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    // Initial fetch
    fetchActivities()

    // Real-time subscription
    const channel = supabase
      .channel('activity_log')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'activity_log' }, (payload) => {
        setActivities((prev) => [payload.new as Activity, ...prev])
      })
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  async function fetchActivities() {
    const { data } = await supabase
      .from('activity_log')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20)
    
    if (data) setActivities(data)
  }

  function getIcon(type: string) {
    switch (type) {
      case 'coding': return <Code className="h-4 w-4 text-blue-500" />
      case 'command': return <Terminal className="h-4 w-4 text-slate-500" />
      case 'chat': return <MessageSquare className="h-4 w-4 text-green-500" />
      default: return <Zap className="h-4 w-4 text-amber-500" />
    }
  }

  return (
    <Card className="col-span-1 lg:col-span-4 rounded-xl border-none shadow-sm h-full">
      <CardHeader>
        <CardTitle className="text-lg">Live Activity</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px]">
          <div className="divide-y">
            {activities.length === 0 ? (
               <div className="p-4 text-sm text-muted-foreground text-center">No activity yet.</div>
            ) : (
              activities.map((item) => (
                <div key={item.id} className="p-4 flex gap-3 hover:bg-slate-50/50 transition-colors">
                  <div className="mt-1">{getIcon(item.type)}</div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{item.summary}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(item.created_at).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
