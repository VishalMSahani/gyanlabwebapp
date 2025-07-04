"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { TooltipProvider } from "@/components/ui/tooltip"
import { useState } from "react"
import { ToastProvider } from "./providers/toast-provider"

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {children}
        <ToastProvider />
      </TooltipProvider>
    </QueryClientProvider>
  )
} 