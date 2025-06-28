"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Star, MessageCircle } from "lucide-react"
import { useReviewSidebar } from "@/components/ReviewSidebarContext"

type Review = {
  id: string
  name: string
  message: string
  rating: number
  service: string
  date: string
  timestamp: number
  country: string
}

const services = ["Blog Writing", "SEO Content", "Copywriting", "Website Content", "Editing"]

// Pre-populated 50 reviews
const initialReviews: Review[] = [
  { id: "1", name: "John Smith", country: "USA", message: "Exceptional blog writing, captured my brand perfectly!", rating: 5, service: "Blog Writing", date: "2025-05-15", timestamp: new Date("2025-05-15").getTime() },
  { id: "2", name: "Ayesha Khan", country: "Pakistan", message: "SEO content boosted our site traffic significantly.", rating: 4, service: "SEO Content", date: "2025-04-20", timestamp: new Date("2025-04-20").getTime() },
  { id: "3", name: "Priya Sharma", country: "India", message: "Professional copywriting, highly engaging!", rating: 5, service: "Copywriting", date: "2025-03-10", timestamp: new Date("2025-03-10").getTime() },
  { id: "4", name: "Emma Johnson", country: "USA", message: "Website content was clear and concise.", rating: 4, service: "Website Content", date: "2025-02-25", timestamp: new Date("2025-02-25").getTime() },
  { id: "5", name: "Muhammad Ali", country: "Pakistan", message: "Editing service polished my manuscript beautifully.", rating: 5, service: "Editing", date: "2025-01-30", timestamp: new Date("2025-01-30").getTime() },
  { id: "6", name: "Rahul Gupta", country: "India", message: "Great SEO strategies, but could be faster.", rating: 3, service: "SEO Content", date: "2024-12-15", timestamp: new Date("2024-12-15").getTime() },
  { id: "7", name: "Sarah Davis", country: "USA", message: "Blog posts were creative and on-brand!", rating: 5, service: "Blog Writing", date: "2024-11-20", timestamp: new Date("2024-11-20").getTime() },
  { id: "8", name: "Fatima Ahmed", country: "Pakistan", message: "Copywriting was persuasive and effective.", rating: 4, service: "Copywriting", date: "2024-10-10", timestamp: new Date("2024-10-10").getTime() },
  { id: "9", name: "Ananya Patel", country: "India", message: "Website content needed more depth.", rating: 3, service: "Website Content", date: "2024-09-05", timestamp: new Date("2024-09-05").getTime() },
  { id: "10", name: "Michael Brown", country: "USA", message: "Editing was thorough and improved clarity.", rating: 5, service: "Editing", date: "2024-08-15", timestamp: new Date("2024-08-15").getTime() },
  { id: "11", name: "Hassan Raza", country: "Pakistan", message: "SEO content was well-researched.", rating: 4, service: "SEO Content", date: "2024-07-20", timestamp: new Date("2024-07-20").getTime() },
  { id: "12", name: "Vikram Singh", country: "India", message: "Blog writing exceeded expectations!", rating: 5, service: "Blog Writing", date: "2024-06-10", timestamp: new Date("2024-06-10").getTime() },
  { id: "13", name: "Emily Taylor", country: "UK", message: "Copywriting was catchy but needed tweaks.", rating: 4, service: "Copywriting", date: "2024-05-25", timestamp: new Date("2024-05-25").getTime() },
  { id: "14", name: "Zainab Malik", country: "Pakistan", message: "Website content was user-friendly.", rating: 4, service: "Website Content", date: "2024-04-30", timestamp: new Date("2024-04-30").getTime() },
  { id: "15", name: "Neha Verma", country: "India", message: "Editing service was top-notch!", rating: 5, service: "Editing", date: "2024-03-15", timestamp: new Date("2024-03-15").getTime() },
  { id: "16", name: "James Wilson", country: "UK", message: "SEO content helped our rankings.", rating: 4, service: "SEO Content", date: "2024-02-20", timestamp: new Date("2024-02-20").getTime() },
  { id: "17", name: "Sofia Martinez", country: "Spain", message: "Blog posts were engaging and unique.", rating: 5, service: "Blog Writing", date: "2024-01-10", timestamp: new Date("2024-01-10").getTime() },
  { id: "18", name: "Bilal Sheikh", country: "Pakistan", message: "Copywriting was compelling!", rating: 4, service: "Copywriting", date: "2023-12-25", timestamp: new Date("2023-12-25").getTime() },
  { id: "19", name: "Riya Jain", country: "India", message: "Website content was well-structured.", rating: 4, service: "Website Content", date: "2023-11-30", timestamp: new Date("2023-11-30").getTime() },
  { id: "20", name: "Lucas Moore", country: "USA", message: "Editing made my work shine.", rating: 5, service: "Editing", date: "2023-10-15", timestamp: new Date("2023-10-15").getTime() },
  { id: "21", name: "Sana Iqbal", country: "Pakistan", message: "SEO content was keyword-rich.", rating: 4, service: "SEO Content", date: "2023-09-20", timestamp: new Date("2023-09-20").getTime() },
  { id: "22", name: "Arjun Reddy", country: "India", message: "Blog writing was creative.", rating: 5, service: "Blog Writing", date: "2023-08-10", timestamp: new Date("2023-08-10").getTime() },
  { id: "23", name: "Ava Thompson", country: "USA", message: "Copywriting needed more punch.", rating: 3, service: "Copywriting", date: "2023-07-25", timestamp: new Date("2023-07-25").getTime() },
  { id: "24", name: "Omar Farooq", country: "UAE", message: "Website content was clear.", rating: 4, service: "Website Content", date: "2023-06-30", timestamp: new Date("2023-06-30").getTime() },
  { id: "25", name: "Isabella Rossi", country: "Italy", message: "Editing was meticulous.", rating: 5, service: "Editing", date: "2023-06-15", timestamp: new Date("2023-06-15").getTime() },
  { id: "26", name: "Liam Chen", country: "Canada", message: "SEO content improved visibility.", rating: 4, service: "SEO Content", date: "2023-05-20", timestamp: new Date("2023-05-20").getTime() },
  { id: "27", name: "Amara Silva", country: "Brazil", message: "Blog posts were vibrant!", rating: 5, service: "Blog Writing", date: "2023-04-10", timestamp: new Date("2023-04-10").getTime() },
  { id: "28", name: "Mei Lin", country: "China", message: "Copywriting was effective.", rating: 4, service: "Copywriting", date: "2023-03-25", timestamp: new Date("2023-03-25").getTime() },
  { id: "29", name: "Layla Khan", country: "Qatar", message: "Website content was professional.", rating: 4, service: "Website Content", date: "2023-02-28", timestamp: new Date("2023-02-28").getTime() },
  { id: "30", name: "Sophie Clark", country: "UK", message: "Editing was exceptional.", rating: 5, service: "Editing", date: "2023-01-15", timestamp: new Date("2023-01-15").getTime() },
  { id: "31", name: "Ahmed Hassan", country: "Egypt", message: "SEO content was on-point.", rating: 4, service: "SEO Content", date: "2022-12-20", timestamp: new Date("2022-12-20").getTime() },
  { id: "32", name: "Olivia Lewis", country: "UK", message: "Blog writing was inspiring.", rating: 5, service: "Blog Writing", date: "2022-11-10", timestamp: new Date("2022-11-10").getTime() },
  { id: "33", name: "Mateo Garcia", country: "Mexico", message: "Copywriting was persuasive.", rating: 4, service: "Copywriting", date: "2022-10-25", timestamp: new Date("2022-10-25").getTime() },
  { id: "34", name: "Zara Ali", country: "Pakistan", message: "Website content was engaging.", rating: 4, service: "Website Content", date: "2022-09-30", timestamp: new Date("2022-09-30").getTime() },
  { id: "35", name: "Rohan Mehta", country: "India", message: "Editing improved my draft.", rating: 5, service: "Editing", date: "2022-08-15", timestamp: new Date("2022-08-15").getTime() },
  { id: "36", name: "David Wilson", country: "USA", message: "SEO content was effective.", rating: 4, service: "SEO Content", date: "2022-07-20", timestamp: new Date("2022-07-20").getTime() },
  { id: "37", name: "Hina Butt", country: "Pakistan", message: "Blog posts were well-written.", rating: 5, service: "Blog Writing", date: "2022-06-10", timestamp: new Date("2022-06-10").getTime() },
  { id: "38", name: "Aditya Rao", country: "India", message: "Copywriting was creative.", rating: 4, service: "Copywriting", date: "2022-05-25", timestamp: new Date("2022-05-25").getTime() },
  { id: "39", name: "Thomas Harris", country: "UK", message: "Website content was clear.", rating: 4, service: "Website Content", date: "2022-04-30", timestamp: new Date("2022-04-30").getTime() },
  { id: "40", name: "Saba Qureshi", country: "Pakistan", message: "Editing was thorough.", rating: 5, service: "Editing", date: "2022-03-15", timestamp: new Date("2022-03-15").getTime() },
  { id: "41", name: "Kavya Nair", country: "India", message: "SEO content was strategic.", rating: 4, service: "SEO Content", date: "2022-02-20", timestamp: new Date("2022-02-20").getTime() },
  { id: "42", name: "Ethan Walker", country: "USA", message: "Blog writing was engaging.", rating: 5, service: "Blog Writing", date: "2022-01-10", timestamp: new Date("2022-01-10").getTime() },
  { id: "43", name: "Asadullah Khan", country: "Pakistan", message: "Copywriting was impactful.", rating: 4, service: "Copywriting", date: "2021-12-25", timestamp: new Date("2021-12-25").getTime() },
  { id: "44", name: "Diya Kapoor", country: "India", message: "Website content was professional.", rating: 4, service: "Website Content", date: "2021-11-30", timestamp: new Date("2021-11-30").getTime() },
  { id: "45", name: "Liam Brown", country: "Canada", message: "Editing was excellent.", rating: 5, service: "Editing", date: "2021-10-15", timestamp: new Date("2021-10-15").getTime() },
  { id: "46", name: "Amir Hussain", country: "Pakistan", message: "SEO content was effective.", rating: 4, service: "SEO Content", date: "2021-09-20", timestamp: new Date("2021-09-20").getTime() },
  { id: "47", name: "Shreya Desai", country: "India", message: "Blog posts were captivating.", rating: 5, service: "Blog Writing", date: "2021-08-10", timestamp: new Date("2021-08-10").getTime() },
  { id: "48", name: "Sophie White", country: "UK", message: "Copywriting was strong.", rating: 4, service: "Copywriting", date: "2021-07-25", timestamp: new Date("2021-07-25").getTime() },
  { id: "49", name: "Omar Saleh", country: "UAE", message: "Website content was clear.", rating: 4, service: "Website Content", date: "2021-06-30", timestamp: new Date("2021-06-30").getTime() },
  { id: "50", name: "Noah Lee", country: "USA", message: "Editing was outstanding.", rating: 5, service: "Editing", date: "2021-06-15", timestamp: new Date("2021-06-15").getTime() },
]

export default function ReviewSidebar() {
  const { isOpen, toggle } = useReviewSidebar()

  const [reviews] = useState<Review[]>(initialReviews)

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-white to-gray-50 border-r shadow-xl p-6 z-[9999] transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:w-96`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
          <MessageCircle className="h-6 w-6 text-blue-600" /> Testimonials
        </h2>
        <button
          onClick={toggle}
          className="text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Close sidebar"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="space-y-4 overflow-y-auto max-h-[80vh] pr-2">
        {reviews.length > 0 ? (
          reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{r.name}</div>
                  <div className="text-xs text-gray-500">{r.country} • {r.date}</div>
                </div>
              </div>
              <div className="text-sm text-blue-600 font-medium mb-1">{r.service}</div>
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="h-4 w-4"
                    fill={r.rating >= s ? "#facc15" : "none"}
                    stroke={r.rating >= s ? "#facc15" : "#d1d5db"}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{r.message}</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500 italic">No testimonials available.</p>
        )}
      </div>
    </aside>
  )
}