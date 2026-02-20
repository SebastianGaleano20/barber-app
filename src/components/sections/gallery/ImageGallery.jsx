'use client'
import { useState } from "react";
import { GALLERY_IMAGES } from "@/data/gallery";
import ImageModal from "@/components/ui/ImageModal";
import { ZoomIn } from "lucide-react";

export default function ImageGallery() {
  const [modalImage, setModalImage] = useState(null);

  return (
    <section className="w-full px-4 py-6 lg:hidden animate-fade-in">
      <h2 className="section-title text-2xl sm:text-3xl text-center font-bold mb-6 text-gray-800 dark:text-gray-100">
        Nuestros Trabajos
      </h2>
      <div className="max-w-sm sm:max-w-md mx-auto ring-2 ring-blue-500/30 dark:ring-blue-400/30 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden">
        <article className="carousel w-full">
          {GALLERY_IMAGES.map((image, index) => (
            <article
              key={index}
              id={`slide${index + 1}`}
              className="carousel-item relative w-full"
            >
              {/* Imagen clickeable para abrir modal */}
              <button
                className="w-full cursor-zoom-in group relative"
                onClick={() => setModalImage(image)}
                aria-label="Ver imagen ampliada"
              >
                <img
                  src={image.image}
                  className="w-full h-80 sm:h-96 object-cover"
                  alt={image.alt}
                />
                {/* Overlay con ícono zoom al hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 h-10 w-10 drop-shadow-lg" />
                </div>
              </button>

              {/* Navegación del carrusel */}
              <article className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
                <a
                  href={`#slide${index === 0 ? GALLERY_IMAGES.length : index}`}
                  className="btn btn-circle btn-sm bg-black/40 hover:bg-black/60 border-none text-white pointer-events-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  ❮
                </a>
                <a
                  href={`#slide${index === GALLERY_IMAGES.length - 1 ? 1 : index + 2}`}
                  className="btn btn-circle btn-sm bg-black/40 hover:bg-black/60 border-none text-white pointer-events-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  ❯
                </a>
              </article>
            </article>
          ))}
        </article>
        <div className="flex justify-center gap-2 py-3 bg-gray-50 dark:bg-gray-800/80">
          {GALLERY_IMAGES.map((_, index) => (
            <a
              key={index}
              href={`#slide${index + 1}`}
              className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors"
            />
          ))}
        </div>
      </div>

      {/* Modal imagen */}
      {modalImage && (
        <ImageModal
          src={modalImage.image}
          alt={modalImage.alt}
          onClose={() => setModalImage(null)}
        />
      )}
    </section>
  )
}
