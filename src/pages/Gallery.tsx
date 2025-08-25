// src/pages/Gallery.tsx
import React from "react"

export default function Gallery() {
  const imgs = [
    "https://github.com/Swamibakal/lab-gallery/blob/main/IMG20250817115709.jpg",
    "https://github.com/Swamibakal/lab-gallery/blob/main/IMG20250817115709.jpg",
    "https://github.com/Swamibakal/lab-gallery/blob/main/IMG20250817115845.jpg",
    "https://github.com/Swamibakal/lab-gallery/blob/main/WILP0563.JPG",
    "https://github.com/Swamibakal/lab-gallery/blob/main/WILP0572.JPG",
    "https://github.com/Swamibakal/lab-gallery/blob/main/WILP0585.JPG",
    "https://github.com/Swamibakal/lab-gallery/blob/main/WILP0599.JPG",
    "https://github.com/Swamibakal/lab-gallery/blob/main/WILP0601.JPG",
    "https://github.com/Swamibakal/lab-gallery/blob/main/WILP0605.JPG",
    "https://github.com/Swamibakal/lab-gallery/blob/main/WILP0803.JPG",
    "https://github.com/Swamibakal/lab-gallery/blob/main/WILP0820.JPG",
    "https://github.com/Swamibakal/lab-gallery/blob/main/WILP0824.JPG",
    "https://github.com/Swamibakal/lab-gallery/blob/main/WILP0832.JPG",
    "https://github.com/Swamibakal/lab-gallery/blob/main/WILP0850.JPG",
    "https://github.com/Swamibakal/lab-gallery/blob/main/WhatsApp%20Image%202025-08-25%20at%2010.38.10_1f29bd9a.jpg",
    "https://github.com/Swamibakal/lab-gallery/blob/main/WhatsApp%20Image%202025-08-25%20at%2010.39.00_186743ef.jpg",
    "https://github.com/Swamibakal/lab-gallery/blob/main/WhatsApp%20Image%202025-08-25%20at%2010.39.00_195da7aa.jpg",
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Lab Work Gallery</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {imgs.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Lab work ${i + 1}`}
            className="w-full h-60 object-cover rounded-2xl shadow hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </div>
  )
}
