"use client"
import { useReviewSidebar } from "./ReviewSidebarContext"
import { Button } from "@/components/ui/button"

export default function ReviewToggleButton() {
  const { toggle } = useReviewSidebar()

  return (
    <div className="px-4 py-2">
      <Button onClick={toggle}>Reviews</Button>
    </div>
  )
}
