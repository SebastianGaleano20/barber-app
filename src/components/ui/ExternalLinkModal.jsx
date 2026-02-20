'use client'
import { useEffect } from 'react'
import { X, ExternalLink } from 'lucide-react'

export default function ExternalLinkModal({ href, platformName, onClose }) {
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-sm shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full btn-gradient flex items-center justify-center flex-shrink-0">
              <ExternalLink className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
              ¿Salir de la página?
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors ml-2"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
          Serás redirigido a{' '}
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            {platformName}
          </span>
          . ¿Querés continuar?
        </p>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2.5 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-semibold"
          >
            Cancelar
          </button>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex-1 px-4 py-2.5 rounded-full btn-gradient text-white text-sm font-semibold text-center hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-1.5"
          >
            Continuar
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
