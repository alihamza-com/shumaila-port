"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function DownloadResumeButton() {
  const handleDownloadResume = async () => {
    try {
      const response = await fetch("/sushmilaresume.pdf")
      const blob = await response.blob()

      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.setAttribute("download", "sushmilaresume.pdf")
      link.style.display = "none"
      document.body.appendChild(link)
      link.click()
      link.remove()
      URL.revokeObjectURL(link.href)
    } catch (error) {
      console.error("Failed to download resume:", error)
    }
  }

  return (
    <Button className="mt-6" size="lg" onClick={handleDownloadResume}>
      <Download className="mr-2 h-4 w-4" />
      Download Resume
    </Button>
  )
}
