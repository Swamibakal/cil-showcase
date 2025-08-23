import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Hardware from './pages/Hardware'
import Experiences from './pages/Experiences'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import './index.css'

function Layout(){
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="sticky top-0 z-20 bg-black/90 text-white px-4 py-3 flex flex-wrap gap-6">
        <Link to="/">Overview</Link>
        <Link to="/hardware">Hardware</Link>
        <Link to="/experiences">Experiences</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="max-w-6xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hardware/*" element={<Hardware />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </React.StrictMode>
)