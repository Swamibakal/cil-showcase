import React from "react"

export default function Gallery() {
  const imgs = [
    "https://raw.githubusercontent.com/Swamibakal/lab-gallery/main/IMG20250817115709.jpg",
    "https://raw.githubusercontent.com/Swamibakal/lab-gallery/main/IMG20250817115709.jpg",
    "https://raw.githubusercontent.com/Swamibakal/lab-gallery/main/IMG20250817115845.jpg",
    "https://raw.githubusercontent.com/Swamibakal/lab-gallery/main/WILP0563.JPG",
    "https://raw.githubusercontent.com/Swamibakal/lab-gallery/main/WILP0572.JPG",
    "https://raw.githubusercontent.com/Swamibakal/lab-gallery/main/WILP0585.JPG",
    "https://raw.githubusercontent.com/Swamibakal/lab-gallery/main/WILP0599.JPG",
    "https://raw.githubusercontent.com/Swamibakal/lab-gallery/main/WILP0601.JPG",
    "https://raw.githubusercontent.com/Swamibakal/lab-gallery/main/WILP0605.JPG",
    "https://raw.githubusercontent.com/Swamibakal/lab-gallery/main/WILP0803.JPG",
    "https://raw.githubusercontent.com/Swamibakal/lab-gallery/main/WILP0820.JPG",
    "https://raw.githubusercontent.com/Swamibakal/lab-gallery/main/WILP0824.JPG",
    "https://raw.githubusercontent.com/Swamibakal/lab-gallery/main/WILP0832.JPG",
    "https://raw.githubusercontent.com/Swamibakal/lab-gallery/main/WILP0850.JPG",
    "https://raw.githubusercontent.com/Swamibakal/lab-gallery/main/WhatsApp%20Image%202025-08-25%20at%2010.38.10_1f29bd9a.jpg",
    "https://raw.githubusercontent.com/Swamibakal/lab-gallery/main/WhatsApp%20Image%202025-08-25%20at%2010.39.00_186743ef.jpg",
    "https://raw.githubusercontent.com/Swamibakal/lab-gallery/main/WhatsApp%20Image%202025-08-25%20at%2010.39.00_195da7aa.jpg",
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
