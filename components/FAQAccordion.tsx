'use client'
import { useState } from 'react'

export default function FAQAccordion({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border rounded-xl overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-800">{question}</span>
        <span className="text-xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t text-gray-600 text-sm">
          {answer}
        </div>
      )}
    </div>
  )
}