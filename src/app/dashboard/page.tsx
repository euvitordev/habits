"use client"

import { Sidebar } from "@/components/aside"

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 justify-center p-24 bg-violet-50">
      <Sidebar />
    </main>
  )
}
