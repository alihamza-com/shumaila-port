"use client"
import { createContext, useContext, useState } from "react"

const ReviewSidebarContext = createContext<{
  isOpen: boolean
  toggle: () => void
}>({ isOpen: false, toggle: () => {} })

export const useReviewSidebar = () => useContext(ReviewSidebarContext)

export function ReviewSidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen((prev) => !prev)

  return (
    <ReviewSidebarContext.Provider value={{ isOpen, toggle }}>
      {children}
    </ReviewSidebarContext.Provider>
  )
}
