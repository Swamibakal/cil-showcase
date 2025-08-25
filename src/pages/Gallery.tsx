export default function Gallery() {
  const imgs = [
    "https://drive.google.com/uc?export=view&id=13d_pUh-sAECESvKhlMkwWXzLFaY96jAj",
    "https://drive.google.com/uc?export=view&id=1t5bFjWZ0vzFe7hffNWC8Z1I8vjjZ69w3",
    "https://drive.google.com/uc?export=view&id=15zO3mAQJdGpH6JHSx2CTeGpnkPIKENXW",
    "https://drive.google.com/uc?export=view&id=1ijIf2mrs-mQ_FhkKhQQ4RMiiy-rxnlPG",
    "https://drive.google.com/uc?export=view&id=1SR0XzyAzVOs2vx_AWH9cy9dhTzfxctwA",
    "https://drive.google.com/uc?export=view&id=18IlCux8RI4hWB6E678dcZUfJUQCoRdY3",
    "https://drive.google.com/uc?export=view&id=1Gd06H6fG_6spbSYYtCmjUmLyQ5W6qVUX",
    "https://drive.google.com/uc?export=view&id=1kV8cFbzRe4WjglhZVyDa6iW0VRRfiFq6",
    "https://drive.google.com/uc?export=view&id=1mOLW6s8mAp9k0_GJrg1a7Hul5JZ3IZ6y",
    "https://drive.google.com/uc?export=view&id=1dZlXXGbM7Y52eXWIVbFInTWvJ74PNe13",
    "https://drive.google.com/uc?export=view&id=1j1EXJq8A-wtvP2JmBDBf0hthqcm8Ph0C",
    "https://drive.google.com/uc?export=view&id=1s5FqFKi5wDNVvOZbTj8UEm5eAqvFThV8",
    "https://drive.google.com/uc?export=view&id=1AgF8mSm7gAMAkR9UZ0PP6zEk7ik7T6ir",
    "https://drive.google.com/uc?export=view&id=1LrMS7IuVsyVVLZhts27GdB6S4z4r4A7U",
    "https://drive.google.com/uc?export=view&id=1e-b10o3TXu-3c8xXQHlWlCev5bqumyeT",
    "https://drive.google.com/uc?export=view&id=1lJz1J3TtQKkS13i95lFVdgM6RrS7Xb7M",
    "https://drive.google.com/uc?export=view&id=1kKfIhbiOiKNIm0xJpmPz0bZ4MT7YOA7n",
    "https://drive.google.com/uc?export=view&id=1P7E8mQ1n9wnQpQ2xE9lqvH7GbZdb1T0v",
    "https://drive.google.com/uc?export=view&id=1kG7w7i_6yBvxlk0T6T_BiZbUUK3lYQdR",
    "https://drive.google.com/uc?export=view&id=1R6HVHYTsu40FjKnJf5MUnQY_j2wr0O1r",
    "https://drive.google.com/uc?export=view&id=1TtbtN2b5whTLPu7eutWiqI1j6PMQ09Yl",
    "https://drive.google.com/uc?export=view&id=1LmKoL7T9QnvqgYdm4uVZzj90SgTzB5xM",
    "https://drive.google.com/uc?export=view&id=1vJq7mM5aZZE7D4NwTxvZgrQjMWp7T3pS",
    "https://drive.google.com/uc?export=view&id=1wqfD7jVjho6oBjO6oZVtzkLK4sHL_3pT",
    "https://drive.google.com/uc?export=view&id=1v6ix2v9GmDN7OQSH64O0f9e6_8gdpY5b",
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
