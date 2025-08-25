// src/pages/Gallery.tsx
import React from "react"

function convertDriveLink(link: string): string {
  // Extract file ID from the Google Drive share link
  const match = link.match(/\/d\/(.*?)\//)
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`
  }
  return link
}

export default function Gallery() {
  // 🔽 Your Google Drive share links
  const shareLinks = [
    "https://drive.google.com/file/d/13d_pUh-sAECESvKhlMkwWXzLFaY96jAj/view?usp=sharing",
    "https://drive.google.com/file/d/1t5bFjWZ0vzFe7hffNWC8Z1I8vjjZ69w3/view?usp=sharing",
    "https://drive.google.com/file/d/15zO3mAQJdGpH6JHSx2CTeGpnkPIKENXW/view?usp=sharing",
    "https://drive.google.com/file/d/1ijIf2mrs-mQ_FhkKhQQ4RMiiy-rxnlPG/view?usp=sharing",
    "https://drive.google.com/file/d/1SR0XzyAzVOs2vx_AWH9cy9dhTzfxctwA/view?usp=sharing",
    "https://drive.google.com/file/d/18IlCux8RI4hWB6E678dcZUfJUQCoRdY3/view?usp=sharing",
    "https://drive.google.com/file/d/1vJqJzG9nUXLx8VcUe5xpn0yujsift7li/view?usp=sharing",
    "https://drive.google.com/file/d/1KK7FY-vPVtCqnEYScfeCmcTaQU3nKMFS/view?usp=sharing",
    "https://drive.google.com/file/d/1PF0cQXDGHsFRA1FoHwi2X8oPCkACGEmU/view?usp=sharing",
    "https://drive.google.com/file/d/1hUPw-A05Z5deiuKSKXOsdcP__um7XeCu/view?usp=sharing",
    "https://drive.google.com/file/d/1lvdRuV6QvwGRbWNNq6LKgc30KP12WLqg/view?usp=sharing",
    "https://drive.google.com/file/d/1bia-AhAMgqdjZ_8gPPwwTpBw9G3OvbYX/view?usp=sharing",
    "https://drive.google.com/file/d/1pvNHlaoPUOiaN0eVDJqBI-i6O2ZQKO75/view?usp=sharing",
    "https://drive.google.com/file/d/1WYK26UBnC-IyGZE7leyFPxsFZ8dKaKaJ/view?usp=sharing",
    "https://drive.google.com/file/d/125aQm2YmnJBoZt5VNFYbuF9_daYk2_Jq/view?usp=sharing",
    "https://drive.google.com/file/d/1UzgUsrT9mGh1S4hpYSrbUMk-fttIcfZL/view?usp=sharing",
    "https://drive.google.com/file/d/1FrpSfYRyQYPx5U_Uz2UFbgQU4rOg_7A8/view?usp=sharing",
    "https://drive.google.com/file/d/139S838sOC2ngY8YVikGlYUoYtD59njeu/view?usp=sharing",
    "https://drive.google.com/file/d/1AQBwxG2LcFAU7nYYVlr5Tl71OdD8ZoAt/view?usp=sharing",
    "https://drive.google.com/file/d/1FnYAqtRuwFgL442MuwacAVx4N_ERM4tT/view?usp=sharing",
    "https://drive.google.com/file/d/1Bk7iz8L3Gp8MCugBXeSKte0XIdPr4lMc/view?usp=sharing",
    "https://drive.google.com/file/d/1R4KgaeE0PhA6XGCU-MRbfpb3VBg6coDJ/view?usp=sharing",
    "https://drive.google.com/file/d/1M5jJKMoXGNBZVVfiSlh2dBL-JPaa-NsU/view?usp=sharing",
    "https://drive.google.com/file/d/1N_RuW3Cv9xC4MbtlareQRAfX91kXnnlN/view?usp=sharing",
    "https://drive.google.com/file/d/1-ht18QnGvDJPaFxktJanJzTDgalR1aw0/view?usp=sharing",
    "https://drive.google.com/file/d/1wjVBNPqAjgFveQr5e-O7K5CHKa2bxz6Q/view?usp=sharing",
  ]

  // Convert share links → direct image links
  const imgs = shareLinks.map(convertDriveLink)

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
