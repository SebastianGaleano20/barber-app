'use client'
import { useState } from "react";
import { DESKTOP_GALLERY } from "@/data/gallery";
import ImageModal from "@/components/ui/ImageModal";
import { ZoomIn } from "lucide-react";

export default function ImageGalleryDesktop() {
  const [modalImage, setModalImage] = useState(null);

  return (
    <section className="w-full hidden lg:block py-6 animate-fade-in">
      <h2 className="section-title text-3xl text-center font-bold mb-6 text-gray-800 dark:text-gray-100">
        Nuestros Trabajos
      </h2>
      <div className="carousel carousel-center w-full gap-3 px-6 overflow-x-auto pb-2">
        {DESKTOP_GALLERY.map((img, index) => (
          <button
            key={index}
            className="carousel-item group relative overflow-hidden rounded-xl shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:ring-blue-500/60 dark:hover:ring-blue-400/60 cursor-zoom-in"
            onClick={() => setModalImage(img)}
            aria-label={`Ver ${img.alt} en grande`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={img.src}
              className="w-80 h-72 object-cover"
              alt={img.alt}
            />
            {/* Hover overlay con ícono zoom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <ZoomIn className="text-white h-10 w-10 drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </button>
        ))}
      </div>

      {/* Modal imagen */}
      {modalImage && (
        <ImageModal
          src={modalImage.src}
          alt={modalImage.alt}
          onClose={() => setModalImage(null)}
        />
      )}
    </section>
  );
}
