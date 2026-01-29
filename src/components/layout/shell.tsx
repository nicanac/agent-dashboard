import { Sidebar } from "./sidebar"
import { Header } from "./header"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <Sidebar />
      <div className="pl-[280px] transition-all duration-300 ease-in-out">
        <Header />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
