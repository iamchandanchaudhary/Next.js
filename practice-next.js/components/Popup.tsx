'use client'
import { useEffect, useState } from 'react'
import { X } from 'lucide-react';

export function Popup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show popup after 2-3 seconds (randomly between 2-3)
    const delay = Math.random() * 1000 + 2000;
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 animate-in fade-in zoom-in duration-300">
        
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-black">Special Offer!</h2>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        
        <div className="p-6 space-y-4">
          <p className="text-gray-600 leading-relaxed">
            🎉 Welcome! Get <span className="font-bold text-blue-600">20% OFF</span> on your first purchase.
          </p>
          <p className="text-sm text-gray-500">
            Use code: <span className="font-mono font-bold bg-gray-100 px-2 py-1 rounded">WELCOME20</span>
          </p>
        </div>

        
        <div className="flex gap-3 p-6 border-t bg-gray-50 rounded-b-lg">
          <button
            onClick={() => setIsVisible(false)}
            className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Maybe Later
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Claim Now
          </button>
        </div>
      </div>
    </div>
  )
}
