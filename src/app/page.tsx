"use client"

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, RefreshCw, Briefcase, Activity, MoreVertical, ShoppingBag, AppWindow } from "lucide-react"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from 'recharts';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      
      {/* Row A: Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Invoices", value: "45/76", icon: DollarSign, sub: "$5,569 (56%)", color: "bg-blue-500", progress: 56 },
          { title: "Converted", value: "48/86", icon: RefreshCw, sub: "52 Completed (63%)", color: "bg-amber-500", progress: 63 },
          { title: "Projects", value: "16/20", icon: Briefcase, sub: "16 Completed (78%)", color: "bg-emerald-500", progress: 78 },
          { title: "Conversion", value: "46.59%", icon: Activity, sub: "$2,254 (46%)", color: "bg-rose-500", progress: 46 },
        ].map((item, i) => (
          <Card key={i} className="rounded-xl border-none shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                <item.icon className="h-5 w-5 text-slate-600" />
              </div>
              <div className="space-y-1 text-right">
                <span className="text-2xl font-bold tracking-tight block">{item.value}</span>
                <span className="text-xs text-muted-foreground font-medium">{item.title}...</span>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 absolute top-4 right-2 text-muted-foreground">
                 <MoreVertical className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
               <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground mb-2">
                  <span>{item.title}...</span>
                  <span>{item.sub}</span>
               </div>
               <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.progress}%` }} />
               </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Row B: Analytics & Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Analytics (2/3) */}
        <div className="col-span-1 lg:col-span-8 space-y-6">
          <Card className="rounded-xl border-none shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
               <h3 className="font-semibold text-lg">Payment Record</h3>
               <Button variant="ghost" size="icon" className="h-8 w-8"><MoreVertical className="h-4 w-4" /></Button>
            </div>
            
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip />
                  <Area type="monotone" dataKey="pv" stroke="#3b82f6" fillOpacity={1} fill="url(#colorPv)" strokeWidth={3} />
                  <Bar dataKey="uv" fill="#e2e8f0" barSize={10} radius={[4, 4, 0, 0]} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Right Column: Stacked (1/3) */}
        <div className="col-span-1 lg:col-span-4 space-y-6">
          
          {/* Highlight Card */}
          <Card className="rounded-xl border-none shadow-md bg-blue-600 text-white overflow-hidden relative">
            <CardHeader>
              <div className="flex justify-between items-start">
                 <div>
                    <CardTitle className="text-3xl font-bold">30,569</CardTitle>
                    <p className="text-blue-100 text-sm mt-1">Total Sales</p>
                 </div>
                 <span className="bg-white/20 text-white text-xs px-2 py-1 rounded font-semibold">12%</span>
              </div>
            </CardHeader>
            <CardContent className="p-0">
               <div className="h-32 mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <Area type="monotone" dataKey="uv" stroke="#ffffff" fill="rgba(255,255,255,0.2)" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
               </div>
            </CardContent>
          </Card>

          {/* List Card */}
          <Card className="rounded-xl border-none shadow-sm">
             <CardContent className="p-0">
                <div className="divide-y">
                   {[
                     { icon: ShoppingBag, title: "Shopify eCommerce", sub: "Store", val: "$1200", subVal: "6 Projects", color: "text-emerald-500 bg-emerald-50" },
                     { icon: AppWindow, title: "iOS Apps Development", sub: "Development", val: "$1450", subVal: "3 Projects", color: "text-blue-500 bg-blue-50" },
                   ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-6 hover:bg-slate-50 transition-colors cursor-pointer">
                         <div className="flex items-center gap-4">
                            <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${item.color}`}>
                               <item.icon className="h-6 w-6" />
                            </div>
                            <div>
                               <h4 className="font-semibold text-sm">{item.title}</h4>
                               <p className="text-xs text-muted-foreground">{item.sub}</p>
                            </div>
                         </div>
                         <div className="text-right">
                            <h4 className="font-semibold text-sm">{item.val}</h4>
                            <p className="text-xs text-muted-foreground">{item.subVal}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </CardContent>
          </Card>

        </div>

      </div>
    </div>
  )
}
