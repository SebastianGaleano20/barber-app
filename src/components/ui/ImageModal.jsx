'use client'
import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function ImageModal({ src, alt, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 transition-all duration-200 hover:scale-110"
        aria-label="Cerrar imagen"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Imagen */}
      <div
        className="relative max-w-4xl w-full max-h-[90vh] animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
        />
        {alt && (
          <p className="text-center text-white/70 text-sm mt-3">{alt}</p>
        )}
      </div>
    </div>
  )
}
